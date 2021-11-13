import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../requestMethods";
import { blogStart } from "../../redux/blogRedux";
import Spinner from "../../components/Spinner";

import "./style.css";
import { FcClearFilters } from "react-icons/fc";
// import imgBlogBanner from "../../assets/images/blog-banner.png";

const Blog = () => {
  const blogs = useSelector((state) => state.blog && state.blog.allBlog);
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [results, setResults] = useState(blogs);
  const countPerPage = 3;
  const [count, setCount] = useState(countPerPage);

  const handleChangeCategory = (e) => {
    if (e.target.value) {
      setResults(
        results &&
          results.filter((result) =>
            result.category.toLowerCase().includes(e.target.value.toLowerCase())
          )
      );
    } else {
      setResults(blogs && blogs);
    }
    setCount(countPerPage);
  };

  const handleChangeTitle = (e) => {
    setResults(blogs && blogs);
    if (e.target.value) {
      setTimeout(() => {
        setResults(
          results &&
            results.filter((result) =>
              result.title_blog
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            )
        );
      }, 500);
    }
    setCount(countPerPage);
  };

  const handleLoadReset = () => {
    setResults(blogs && blogs);
    setCount(countPerPage);
    setSpinner(true);
    setTimeout(() => setSpinner(false), 1000);
  };

  const handleLoadMore = () => {
    setCount(blogs && count < results.length && count + countPerPage);
  };

  useEffect(() => {
    const getBlog = async (dispatch) => {
      try {
        const res = await publicRequest.get("/blog");
        dispatch(blogStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    getBlog(dispatch);
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setResults(blogs && blogs);
  }, [blogs]);

  return spinner ? (
    <Spinner />
  ) : (
    <div className="bg-color-blog">
      {blogs && console.log(results)}
      {/* {blogs && console.log(results.length)}
        {blogs && console.log(count)} */}
      <div className="mt-3 g-0 px-3 py-0 blog-list-container">
        <h1 className="page-title">Blog</h1>
      </div>
      <div className="row mt-0 justify-content-center g-0 px-3 py-0 blog-list-container">
        <div className="col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-4 mx-auto mt-4 text-center">
              <div className="form-floating h-100">
                <select
                  className="form-select h-100 text-center"
                  id="blogCategory"
                  aria-label="blog-category"
                  onChange={handleChangeCategory}
                >
                  <option defaultValue value="">
                    Semua
                  </option>
                  <option value="belajar">Belajar bareng</option>
                  <option value="tips">Tips dan trick</option>
                </select>
                <label htmlFor="blogCategory">Pilih Kategori</label>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 mx-auto mt-4 text-center">
              <input
                type="search"
                className="form-control form-control-lg form-control-search h-100"
                id="inputSearch"
                placeholder='Coba cari "Tips melatih vokal" ⌨'
                onChange={handleChangeTitle}
              />
            </div>
            <div className="col-lg-2 col-md-4 mx-auto mt-4 text-center">
              <button
                className="btn blog-load-more py-3 h-100"
                type="button"
                onClick={handleLoadReset}
              >
                Reset Filter
                <FcClearFilters className="blog-icon-filter" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 blog-list-container">
        <div className="col-md-12">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {results && results.length !== 0 ? (
              results.slice(0, count).map((blog) => (
                <div className="col" key={blog.id}>
                  <div className="card blog-card p-2 m-1 my-auto">
                    <div className="row px-2 mt-2">
                      <div className="col-md-12">
                        <p className="blog-card-title">{blog.title_blog}</p>
                      </div>
                    </div>
                    <div className="row px-2">
                      <div className="col-md-5 col-6 my-auto">
                        <p className="blog-card-category my-auto">
                          {blog.category}
                        </p>
                      </div>
                      <div className="col-md-7 col-6 my-auto">
                        <p className="blog-card-date my-auto text-end">{blog.date}</p>
                      </div>
                    </div>
                    <div className="row px-2 mt-3">
                      <div className="col-md-12">
                        <img
                          src={blog.image.replace('"', "")}
                          alt="card"
                          className="img-fluid blog-card-img"
                        />
                      </div>
                    </div>
                    <div className="row px-2 pb-2 mt-2">
                      <div className="col-12">
                        <Link to={`/syncphonic-frontend/blog/${blog.id}`}>
                          <button
                            className="btn blog-card-btn-detail"
                            type="button"
                          >
                            Detail
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p className="blog-data-null text-center">Tidak ada data</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row mt-4 blog-list-container">
        <div className="col-md-2 mx-auto text-center">
          {count < results.length && (
            <button
              className="btn blog-load-more py-3 mb-4"
              type="button"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
