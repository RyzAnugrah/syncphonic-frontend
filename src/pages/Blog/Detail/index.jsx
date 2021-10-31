import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { publicRequest } from "../../../requestMethods";
import { blogDetailStart } from "../../../redux/blogRedux";
import Spinner from "../../../components/Spinner";

import "./style.css";
// import imgStudioDetailBanner from "../../../assets/images/blog-detail-banner.png";

const Detail = () => {
  const blog = useSelector(
    (state) =>
      state.blog && state.blog.detailBlog && state.blog.detailBlog.result
  );
  const dispatch = useDispatch();
  let { id } = useParams();

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const getBlogDetail = async (dispatch) => {
      try {
        const res = await publicRequest.get(`/blog/${id}`);
        dispatch(blogDetailStart(res.data));
      } catch (err) {
        console.log(err.message);
      }
    };
    getBlogDetail(dispatch);
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return spinner ? (
    <Spinner />
  ) : (
    <div>
      <div className="bg-color-blog-detail">
        <div className="row justify-content-center g-0 px-1 py-4 blog-detail-list-container">
          {blog && console.log(blog)}
          <div className="px-2">
            <div className="align-items-center px-1 my-auto">
              <p className="blog-detail-text-title">
                {blog && blog.title_blog}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 px-0">
              <img
                src={blog && blog.image.replace('"', "")}
                alt="blog"
                className="img-fluid blog-detail-img-banner"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 px-0">
                  <p className="blog-detail-text-desc">Kategori</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 px-0">
                  <p className="blog-detail-text-title margin-up">
                    {blog.category}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 px-0">
                  <p className="blog-detail-text-desc">Tanggal Publikasi</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 px-0">
                  <p className="blog-detail-text-title margin-up">
                    {blog && blog.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12 px-0">
              <p className="blog-detail-text-desc">{blog && blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
