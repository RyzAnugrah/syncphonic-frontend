import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import jQuery from "jquery";
import Swal from "sweetalert2";
import qs from "qs";

import {
  publicRequest,
  adminRequest,
  adminRequestPut,
} from "../../../../requestMethods";
import {
  blogStart,
  blogDetailStart,
  blogPostStart,
  blogPostAccepted,
  blogPostFailure,
  blogPutStart,
  blogPutAccepted,
  blogPutFailure,
} from "../../../../redux/blogRedux";
import Spinner from "../../../../components/Spinner";

import Sidebar from "../../../../components/Dashboard/Admin/Sidebar/index";
import Navbar from "../../../../components/Dashboard/Admin/Navbar/index";
import Footer from "../../../../components/Dashboard/Admin/Footer/index";
import {
  FaUserEdit,
  FaWarehouse,
  FaTachometerAlt,
  FaPlus,
  FaTrash,
  FaPen,
} from "react-icons/fa";
import { GiGuitarHead } from "react-icons/gi";
import "../style.css";

import profilePicture from "../../../../assets/images/undraw_profile.svg";

(function ($) {
  $(function () {
    $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $(window).on("resize", function () {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse("hide");
      }

      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse("hide");
      }
    });

    $("body.fixed-nav .sidebar").on(
      "mousewheel DOMMouseScroll wheel",
      function (e) {
        if ($(window).width() > 768) {
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      }
    );
  });
})(jQuery);

const Blog = () => {
  const blogsList = useSelector((state) => state.blog && state.blog.allBlog);
  const blogDetailList = useSelector(
    (state) =>
      state.blog && state.blog.detailBlog && state.blog.detailBlog.result
  );
  const isFetching = useSelector(
    (state) => state.blog && state.blog.isFetching
  );
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const countPerPage = 10;
  const [spinner, setSpinner] = useState(true);
  const [resultsList, setResultsList] = useState(blogsList);
  const [resultDetailList, setResultDetailList] = useState(blogDetailList);
  const [countList, setCountList] = useState(countPerPage);
  const [blogListId, setBlogListId] = useState();

  const [blogTitleUpdate, setBlogTitleUpdate] = useState(
    resultDetailList && resultDetailList.title_blog
  );
  const [blogCategoryUpdate, setBlogCategoryUpdate] = useState(
    resultDetailList && resultDetailList.category
  );
  const [blogImgUpdate, setBlogImgUpdate] = useState(
    resultDetailList && resultDetailList.image
  );
  const [blogDateUpdate, setBlogDateUpdate] = useState(
    resultDetailList && resultDetailList.date
  );
  const [blogContentUpdate, setBlogContentUpdate] = useState(
    resultDetailList && resultDetailList.content
  );

  const getBlogList = async (dispatch) => {
    try {
      const res = await publicRequest.get("/blog");
      dispatch(blogStart(res.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLoadMoreList = () => {
    setCountList(
      blogsList && countList < resultsList.length && countList + countPerPage
    );
  };

  const handleBlogListConfirm = (blogIdList) => {
    setBlogListId(blogIdList);
  };

  const blogPosted = async (dispatch, blogDataList) => {
    dispatch(blogPostStart());
    console.log(blogDataList);
    try {
      const res = await adminRequest.post("/blog/post", blogDataList);
      dispatch(blogPostAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil tambah blog!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          reset();
          getBlogList(dispatch);
          setResultsList(blogsList && blogsList);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        }, 100);
      });
    } catch (err) {
      dispatch(blogPostFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal tambah blog!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickBlogPost = ({
    title_blog,
    category,
    image,
    date,
    content,
  }) => {
    const dataBlog = new FormData();
    dataBlog.append("title_blog", title_blog);
    dataBlog.append("category", category);
    dataBlog.append("image", image[0]);
    dataBlog.append("date", date);
    dataBlog.append("content", content);
    blogPosted(dispatch, dataBlog);
  };

  const blogUpdated = async (dispatch, blogDataList) => {
    dispatch(blogPutStart());
    // console.log(blogDataList);
    console.log(qs.stringify(blogDataList));
    try {
      const res = await adminRequestPut.put(
        `/blog/${blogListId}`,
        qs.stringify(blogDataList)
      );
      dispatch(blogPutAccepted());
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Berhasil update blog!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          getBlogList(dispatch);
          setResultsList(blogsList && blogsList);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        }, 100);
      });
    } catch (err) {
      dispatch(blogPutFailure());
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal update blog!",
        confirmButtonColor: "#A6711F",
        confirmButtonText: "Coba lagi",
        timer: 3000,
      });
    }
  };

  const handleClickBlogUpdate = (e) => {
    e.preventDefault();
    const title_blog = blogTitleUpdate;
    const category = blogCategoryUpdate;
    const image = blogImgUpdate;
    const date = blogDateUpdate;
    const content = blogContentUpdate;

    blogUpdated(dispatch, {
      title_blog,
      category,
      image,
      date,
      content,
    });
  };

  const handleDeleteBlogList = async (blogIdList) => {
    // console.log(blogList);
    try {
      const res = await adminRequest.delete(`/blog/${blogIdList}`);
      console.log(res.data);
      if (res.data && res.data.message !== null) {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Berhasil menghapus blog!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          getBlogList(dispatch);
          setResultsList(blogsList && blogsList);
          setSpinner(true);
          setTimeout(() => setSpinner(false), 1000);
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Gagal!",
          text: "Gagal menghapus blog!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        icon: "warning",
        title: "Gagal...",
        text: "Gagal menghapus blog!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getBlogList(dispatch);

    const getBlogDetailList = async (dispatch) => {
      try {
        const res = await publicRequest.get(`/blog/${blogListId}`);
        dispatch(blogDetailStart(res.data));
        // console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getBlogDetailList(dispatch);
  }, [dispatch, blogListId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  useEffect(() => {
    setResultsList(blogsList && blogsList);
    setResultDetailList(blogDetailList && blogDetailList);
    setBlogTitleUpdate(resultDetailList && resultDetailList.title_blog);
    setBlogCategoryUpdate(resultDetailList && resultDetailList.category);
    setBlogImgUpdate(resultDetailList && resultDetailList.image);
    setBlogDateUpdate(resultDetailList && resultDetailList.date);
    setBlogContentUpdate(resultDetailList && resultDetailList.content);
  }, [blogsList, blogDetailList, resultDetailList]);

  return (
    <div id="wrapper">
      {console.log(resultsList)}
      {console.log(resultDetailList)}
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="dashboard-container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 dashboard-title">Blog</h1>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          Dashboard
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaTachometerAlt />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Studio
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaWarehouse />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/studio"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Instrument
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <GiGuitarHead />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/instrument"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-card shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters my-auto h-100">
                      <div className="col mr-2 align-items-center my-auto">
                        <div className="text-md font-weight-bold text-uppercase card-dashboard-title">
                          List Member
                        </div>
                      </div>
                      <div className="col-auto align-items-center my-auto">
                        <i className="fa-2x card-dashboard-title">
                          <FaUserEdit />
                        </i>
                      </div>
                    </div>
                    <Link
                      to="/syncphonic-frontend/dashboard/admin/user"
                      className="stretched-link"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-5 col-sm-6 col-6 my-auto">
                        <h2 className="h-100 my-auto">List Blog</h2>
                      </div>
                      <div className="col-md-7 col-sm-6 col-6">
                        <a
                          href="#addBlogModal"
                          className="btn btn-add"
                          data-toggle="modal"
                        >
                          <i>
                            <FaPlus />
                          </i>
                          <span>Tambah</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {spinner ? (
                    <Spinner />
                  ) : (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th className="table-column-text">Judul</th>
                          <th className="table-column-text">Kategori</th>
                          <th className="table-column-text">Gambar</th>
                          <th className="table-column-text">Tanggal</th>
                          <th className="table-column-text">Konten</th>
                          <th className="table-column-text">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultsList && resultsList.length !== 0 ? (
                          resultsList.slice(0, countList).map((blogList) => (
                            <tr key={blogList.id}>
                              <td className="table-column-text">
                                {blogList.title_blog}
                              </td>
                              <td className="table-column-text">
                                {blogList.category}
                              </td>
                              <td className="table-column-text">
                                <img
                                  src={
                                    blogList.image.includes("http")
                                      ? blogList.image.replace('"', "")
                                      : profilePicture
                                  }
                                  alt="profile"
                                  className="d-block img-fluid"
                                />
                              </td>
                              <td className="table-column-text">
                                {blogList.date}
                              </td>
                              <td className="table-column-text">
                                {blogList.content}
                              </td>
                              <td>
                                <a
                                  href="#editBlogModal"
                                  className="edit"
                                  data-toggle="modal"
                                  onClick={() =>
                                    handleBlogListConfirm(blogList.id)
                                  }
                                >
                                  <i data-toggle="tooltip" title="Edit">
                                    <FaPen />
                                  </i>
                                </a>
                                <a
                                  href="#deleteBlogModal"
                                  className="delete"
                                  data-toggle="modal"
                                  onClick={() =>
                                    handleBlogListConfirm(blogList.id)
                                  }
                                >
                                  <i data-toggle="tooltip" title="Hapus">
                                    <FaTrash />
                                  </i>
                                </a>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td className="table-column-text">
                              Tidak ada data
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
                  <div className="clearfix">
                    <div className="hint-text">
                      Menampilkan &nbsp;
                      <b>
                        {countList && countList < resultsList.length
                          ? countList
                          : resultsList.length}
                      </b>
                      &nbsp; dari &nbsp;
                      <b>{resultsList && resultsList.length}</b>
                      &nbsp; data &nbsp;
                      {resultsList && countList < resultsList.length && (
                        <span
                          className="px-3 handle-load-more"
                          type="button"
                          onClick={handleLoadMoreList}
                        >
                          Load more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="addBlogModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form onSubmit={handleSubmit(handleClickBlogPost)}>
                  <div className="modal-header">
                    <h4 className="modal-title">Tambah Blog</h4>
                    <button
                      type="button"
                      className="close"
                      aria-hidden="true"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="inputBlogTitle">Judul Blog</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputBlogTitle"
                        {...register("title_blog", {
                          required: true,
                          pattern:
                            /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i,
                          maxLength: 100,
                        })}
                      />
                      {errors.title_blog &&
                        errors.title_blog.type === "required" && (
                          <p className="error">Judul blog wajib diisi</p>
                        )}
                      {errors.title_blog &&
                        errors.title_blog.type === "pattern" && (
                          <p className="error">Judul blog hanya berisi huruf</p>
                        )}
                      {errors.title_blog &&
                        errors.title_blog.type === "maxLength" && (
                          <p className="error">
                            Judul blog maksimal 100 karakter
                          </p>
                        )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputBlogCategory">Kategori</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="inputBlogCategory"
                        {...register("category", {
                          required: true,
                        })}
                      />
                      {errors.category &&
                        errors.category.type === "required" && (
                          <p className="error">Kategori wajib diisi</p>
                        )}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="inputStudioImg">
                        Gambar
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-dashboard"
                        id="inputStudioImg"
                        {...register("image", {
                          required: true,
                        })}
                      />
                      {errors.image && errors.image.type === "required" && (
                        <p className="error">Gambar wajib diisi</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputBlogDate">Tanggal</label>
                      <input
                        type="date"
                        className="form-control form-control-dashboard"
                        id="inputBlogDate"
                        {...register("date", {
                          required: true,
                        })}
                      />
                      {errors.date && errors.date.type === "required" && (
                        <p className="error">Tanggal wajib diisi</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputBlogContent">Konten</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        id="inputBlogContent"
                        {...register("content", {
                          required: true,
                        })}
                      />
                      {errors.content && errors.content.type === "required" && (
                        <p className="error">Konten wajib diisi</p>
                      )}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Kirim"
                      disabled={isFetching}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="editBlogModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form onSubmit={handleClickBlogUpdate}>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit Blog</h4>
                    <button
                      type="button"
                      className="close"
                      aria-hidden="true"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="updateBlogTitle">Judul Blog</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        id="updateBlogTitle"
                        value={blogTitleUpdate}
                        onChange={(e) => setBlogTitleUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="updateBlogCategory">Kategori</label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        required
                        id="updateBlogCategory"
                        value={blogCategoryUpdate}
                        onChange={(e) => setBlogCategoryUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="updateImg">
                        Gambar
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-dashboard"
                        id="updateImg"
                        required
                        value={blogImgUpdate}
                        onChange={(e) => setBlogImgUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="updateBlogDate">Tanggal</label>
                      <input
                        type="date"
                        className="form-control form-control-dashboard"
                        required
                        id="updateBlogDate"
                        value={blogDateUpdate}
                        onChange={(e) => setBlogDateUpdate(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="updateBlogContent">Konten</label>
                      <textarea
                        className="form-control form-control-dashboard"
                        required
                        id="updateBlogContent"
                        value={blogContentUpdate}
                        onChange={(e) => setBlogContentUpdate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      value="Batal"
                      data-dismiss="modal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Edit"
                      disabled={isFetching}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="deleteBlogModal" className="modal fade">
            <div className="modal-dialog mx-auto align-items-center">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Hapus Blog</h4>
                    <button
                      type="button"
                      className="close"
                      aria-hidden="true"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Apakah Anda yakin ingin menghapus data ini?</p>
                    <p className="text-warning">
                      <small>Tindakan ini tidak bisa dibatalkan.</small>
                    </p>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-cancel"
                      data-dismiss="modal"
                      value="Batal"
                    />
                    <input
                      type="submit"
                      className="btn btn-modal-add"
                      value="Hapus"
                      data-dismiss="modal"
                      onClick={() => handleDeleteBlogList(blogListId)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
