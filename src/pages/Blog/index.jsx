import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../requestMethods";
import { blogStart } from "../../redux/blogRedux";
import Spinner from "../../components/Spinner";

import "./style.css";
import { FcClearFilters } from "react-icons/fc";
import imgBlogBanner from "../../assets/images/blog-banner.png";
// import imgStudioBanner from "../../assets/images/studio-banner.png";
// import imgAlatBanner from "../../assets/images/alat-banner.png";
// import imgStudioCard1 from "../../assets/images/studio-card-1.png";
// import imgStudioCard from "../../assets/images/studio-card-2.png";
// import imgStudioCard from "../../assets/images/studio-card-3.png";

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
      <div className="blog-list-container px-3">
        <div className="row justify-content-center g-0 px-3 py-4 bg-color-header">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-7 my-auto">
                <p className="blog-hero-category">
                  {results && results[0] && results[0].category}
                </p>
                <p className="blog-hero-title">
                  {results && results[0] && results[0].title_blog}
                </p>
                <p className="blog-hero-content">
                  {results && results[0] && results[0].content.substring(0, 20)}
                  <span className="blog-hero-content-link">
                    <Link
                      to={`/syncphonic-frontend/blog/${
                        results && results[0] && results[0].id
                      }`}
                    >
                      &nbsp; Selengkapnya
                    </Link>
                  </span>
                </p>
                <p className="blog-hero-date">
                  {results && results[0] && results[0].date}
                </p>
              </div>
              <div className="col-md-5">
                <img
                  src={
                    results && results[0] && results[0].image
                      ? results[0].image
                      : imgBlogBanner
                  }
                  alt="card"
                  className="img-fluid blog-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-0 justify-content-center g-0 px-3 py-0 blog-list-container">
        <div className="col-md-12">
          <div className="row justify-content-center">
            <div className="col-md-3 mt-4 text-center">
              <div className="form-floating">
                <select
                  className="form-select text-center"
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
            <div className="col-md-4 mt-4 text-center">
              <input
                type="search"
                className="form-control form-control-lg form-control-search"
                id="inputSearch"
                placeholder='Coba cari "Tips melatih vokal" ⌨'
                onChange={handleChangeTitle}
              />
            </div>
            <div className="col-md-3 mt-4 text-center">
              <button
                className="btn blog-load-more py-3"
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
                  <div className="card blog-card p-2 m-2">
                    <div className="row px-2 mt-2">
                      <div className="col-md-12">
                        <p className="blog-card-category">{blog.category}</p>
                      </div>
                    </div>
                    <div className="row px-2 mt-2">
                      <div className="col-md-12">
                        <p className="blog-card-title">{blog.title_blog}</p>
                      </div>
                    </div>
                    <div className="row px-2">
                      <div className="col-md-12">
                        <p className="blog-card-date">{blog.date}</p>
                      </div>
                    </div>
                    <div className="row px-2 mt-2">
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
              <div className="col">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p className="blog-data-null">Tidak ada data</p>
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
              className="btn blog-load-more py-3"
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
