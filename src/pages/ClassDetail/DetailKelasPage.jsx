// import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavbarComponents from "../../assets/components/NavbarComponents";
import badge from "../../assets/img/icon/badge-svg.svg";
import modul from "../../assets/img/icon/clarity_book-line.svg";
import time from "../../assets/img/icon/ri_time-fill.svg";
import message from "../../assets/img/icon/gridicons_chat.svg";
import play_video from "../../assets/img/icon/play video.svg";
import progress_check from "../../assets/img/icon/progress-check.svg";
import done_play_button from "../../assets/img/icon/green-play.svg";
import undone_play_button from "../../assets/img/icon/dark-blue-play.svg";
import locked from "../../assets/img/icon/bxs_lock.svg";

const DetailKelasPage = () => {
  const [MateriBelajar, setMateriBelajar] = useState(false);
  const [TentangKelas, setTentangKelas] = useState(true);

  const toogleTentangKelas = () => {
    setTentangKelas(true);
    setMateriBelajar(false);
  };

  const toogleMateriBelajar = () => {
    setMateriBelajar(true);
    setTentangKelas(false);
  };

  return (
    <div className="parents">
      <div className="nav-component-section hidden laptop:flex">
        <NavbarComponents />
      </div>

      {/* Desktop */}
      {/* Hero Section */}
      <div className="hero-section hidden mobile:hidden laptop:flex laptop:flex-col gap-2 px-[5.5rem] py-[1rem] bg-[#EBF3FC] w-full">
        <div className="top-text-section flex items-center mt-[1.5rem] gap-[1.25rem]">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          <span className="font-montserrat text-[1rem] font-bold leading-[1.5rem]">
            Kelas Lainnya
          </span>
        </div>

        {/* Title, Course Name, & Author Section */}
        <div className="course-section flex flex-col gap-2 px-[1.5rem] py-[1rem]">
          <div className="name-rate-section w-[60%] h-[1rem] flex justify-between items-center mt-[.5rem]">
            <span className="course-name-text text-[#6148FF] font-montserrat font-black leading-[0.9rem] text-[1.25rem]">
              UI/UX Design
            </span>
            <div className="rating-star-section flex gap-1 items-center">
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#F9CC00" }}
              />
              <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                5.0
              </span>
            </div>
          </div>
          <span className="title-text-section font-black font-montserrat text-[#202244] text-[1.25rem] leading-[1.5rem]">
            Intro to Basic Of User Interaction Design
          </span>
          <span className="author-text-section font-[600] font-montserrat text-[0.9rem] leading-[1.2rem] ">
            by Simon Doe
          </span>

          {/* Deets Section */}
          <div className="deets-section flex gap-[4.25rem]">
            <div className="badge-level-section flex items-center gap-1">
              <img src={badge} alt="badge-level" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                Beginner Level
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={modul} alt="modul-course" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                5 Modul
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={time} alt="course-time" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                45 Menit
              </span>
            </div>
          </div>

          {/* Button Telegram Section */}
          <div className="telegram-btn-section relative w-[25%]">
            <button className="bg-[#73CA5C] w-full text-white rounded-[1.6rem] px-[1rem] py-[0.5rem] font-montserrat text-[1rem] leading-[1.5rem] font-black shadow-lg flex items-center gap-2 justify-center">
              <span>Join Grup Telegram</span>
              <img src={message} alt="message-icon" width="30" />
            </button>
            {/* <div className="message-icon-section absolute transform -translate-y-1/2 right-[1em] top-1/2 cursor-pointer">
              <img src={message} alt="message-icon" width="30" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Class Detail Section */}
      <div className="class-detail-section hidden mobile:hidden laptop:flex w-full py-[2rem]">
        <div className="left-class-section w-[60%] flex flex-col gap-[1.5rem] mx-[6.5rem]">
          <div className="video-play-container bg-[rgba(0,0,0,0.85)] w-full h-[25rem] rounded-[1.525rem] flex justify-center items-center">
            <img src={play_video} alt="play-video" />
          </div>
          <div className="about-class-container flex flex-col gap-[1rem]">
            <span className="font-montserrat font-black text-[1.5rem] leading-[0.9rem]">
              Tentang Kelas
            </span>
            <span className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
              Design system adalah kumpulan komponen design, code, ataupun
              dokumentasi yang dapat digunakan sebagai panduan utama yang
              memunginkan designer serta developer memiliki lebih banyak kontrol
              atas berbagai platform. Dengan hadirnya design system, dapat
              menjaga konsistensi tampilan user interface dan meningkatkan user
              experience menjadi lebih baik. Disisi bisnis, design system sangat
              berguna dalam menghemat waktu dan biaya ketika mengembangkan suatu
              produk. Bersama mentor XXX, kita akan mempelajari design system
              dari mulai manfaat, alur kerja pembuatannya, tools yang digunakan,
              hingga pada akhirnya, kita akan membuat MVP dari design system.
              Selain itu, mentor juga akan menjelaskan berbagai resource yang
              dibutuhkan untuk mencari inspirasi mengenai design system. Kelas
              ini sesuai untuk Anda yang ingin memahami apa itu design system.
              Tidak hanya ditujukan untuk UI/UX Designer ataupun Developer,
              kelas ini sangat sesuai untuk stakeholder lain agar dapat
              memudahkan tim dalam bekerja sama. Yuk segera daftar dan kami
              tunggu di kelas ya!
            </span>
          </div>

          <div className="scope-class-container flex flex-col gap-[1rem]">
            <span className="font-montserrat font-black text-[1.5rem] leading-[0.9rem]">
              Kelas Ini Ditujukan Untuk
            </span>
            <ol className="list-item-section list-decimal ml-[1.2rem]">
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin memahami poin penting design system
              </li>
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin membantu perusahaan lebih optimal dalam membuat
                design produk
              </li>
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin latihan membangun design system
              </li>
              <li className="font-normal text-[.8rem] leading-[1.5rem] font-montserrat text-[rgba(0,0,0,0.80)]">
                Anda yang ingin latihan membangun design system
              </li>
            </ol>
          </div>
        </div>

        <div className="right-class-section w-[40%] flex justify-center pr-[3rem]">
          <div className="materi-container w-[100%] h-[15rem] rounded-[1rem] px-[1.25rem] py-[1.25rem] flex flex-col -mt-[15rem] bg-[#FFFF] shadow-xl">
            <div className="top-text flex items-center gap-[1.5rem] w-full justify-between">
              <div className="text-materi w-[50%]">
                <span className="font-montserrat font-black text-[1.25rem] leading-[0.75rem]">
                  Materi Belajar
                </span>
              </div>
              <div className="progress-bar-section flex gap-2 w-[50%]">
                <img src={progress_check} alt="progress-check" width="20" />
                <span className="rounded-[1rem] bg-[#6148FF] w-[10rem] text-[0.9rem] font-montserrat text-white px-[1rem]">
                  100% complete
                </span>
              </div>
            </div>
            <div className="chapter-section flex justify-between items-center w-[95%] mt-2">
              <span className="chapter-title font-montserrat text-[#6148FF] font-black text-[1rem] leading-[2.25rem]">
                Chapter 1 - Pendahuluan
              </span>
              <span className="chapter-time font-black font-montserrat leading-[2.25rem] text-[0.9rem] text-[#489CFF]">
                60 menit
              </span>
            </div>
            <div className="chapter-materi-section flex flex-col gap-2">
              <div className="card-materi-section flex gap-4">
                <span className="rounded-[100%] bg-[#EBF3FC] px-[1rem] py-[.5rem]">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Desktop */}

      {/* Mobile */}
      <div className="mobile-section w-full h-screen bg-slate-600 block laptop:hidden">
        <div className="play-video-mobile-container bg-[rgba(0,0,0,0.85)] w-full h-[30%] flex justify-center items-center">
          <img src={play_video} alt="play-video-course" />
        </div>

        <div className="mobile-materi-section flex flex-col gap-[.9rem] rounded-[1.5rem] -mt-[2rem] h-full bg-[#FFFF] py-[2rem]">
          <div className="mobile-course-category flex justify-between items-center ml-[1.35rem] mr-[1.5rem]">
            <span className="font-montserrat text-dark-blue text-[1.25rem] font-black leading-[0.9rem]">
              UI/UX Design
            </span>
            <div className="rating-star-section flex gap-1 items-center">
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#F9CC00" }}
              />
              <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                5.0
              </span>
            </div>
          </div>

          <div className="mobile-title-course-section flex flex-col gap-1 ml-[1.35rem] mr-[1.5rem]">
            <span className="course-title font-black font-montserrat text-[1rem] leading-[1.5rem] text-[#202244]">
              Intro to Basic of User Introduction Design
            </span>
            <span className="author-section font-bold text-[0.85rem] leading-[1.1rem] text-[#000] font-montserrat">
              by Simon Doe
            </span>
          </div>

          <div className="mobile-deets-section flex items-center gap-[1.5rem] ml-[1.35rem] mr-[1.5rem] mt-1">
            <div className="badge-level-section flex items-center gap-1">
              <img src={badge} alt="badge-level" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                Beginner Level
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={modul} alt="modul-course" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                5 Modul
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={time} alt="course-time" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                45 Menit
              </span>
            </div>
          </div>

          {TentangKelas && !MateriBelajar ? (
            <>
              <div className="select-about-materi-section flex items-center w-full mt-2 cursor-pointer">
                <div
                  className="about-section flex justify-center items-center bg-dark-blue w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleTentangKelas();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#FFFF]">
                    Tentang
                  </span>
                </div>
                <div
                  className="materi-section flex justify-center items-center bg-sky-100 w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleMateriBelajar();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#489CFF]">
                    Materi Kelas
                  </span>
                </div>
              </div>
              <div className="detail">Tentang Kelas</div>
            </>
          ) : (
            <>
              <div className="select-about-materi-section flex items-center w-full mt-2 cursor-pointer">
                <div
                  className="about-section flex justify-center items-center bg-sky-100 w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleTentangKelas();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#489CFF]">
                    Tentang
                  </span>
                </div>
                <div
                  className="materi-section flex justify-center items-center bg-dark-blue w-[50%] py-[.5rem]"
                  onClick={() => {
                    toogleMateriBelajar();
                  }}
                >
                  <span className="font-montserrat text-[0.9rem] font-black leading-[2.25rem] text-[#FFFF]">
                    Materi Kelas
                  </span>
                </div>
              </div>
              <div className="chapter-section flex flex-col gap-2 ml-[1.35rem] mr-[1.5rem] mt-2">
                <span className="font-montserrat font-black text-[1.25rem] leading-[0.9rem]">
                  Materi Belajar
                </span>
                <div className="chapter-title-section flex items-center justify-between">
                  <span className="font-montserrat font-extrabold text-dark-blue text-[0.8rem] leading-[2.25rem]">
                    Chapter 1 - Pendahuluan
                  </span>
                  <span className="font-montserrat text-[#489CFF] text-[0.8rem] font-extrabold leading-[2.25rem]">
                    60 Menit
                  </span>
                </div>
              </div>

              <div className="chapter-card-section flex flex-col items-center gap-1 ml-[1.35rem] mr-[1.5rem]">
                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-2">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[0.8rem] font-bold leading-[0.9rem] hover:bg-dark-blue hover:text-white">
                      1
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[0.75rem] font-semibold leading-[1.25rem] font-montserrat">
                      Tujuan Mengikuti Kelas Design System
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={done_play_button}
                    alt="success-play-button"
                    width="20"
                  />
                </div>

                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-2">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[0.8rem] font-bold leading-[0.9rem] hover:bg-dark-blue hover:text-white">
                      2
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[0.75rem] font-semibold leading-[1.25rem] font-montserrat">
                      Pengenalan Design System
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={done_play_button}
                    alt="success-play-button"
                    width="20"
                  />
                </div>

                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-2">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[0.75rem] font-bold leading-[0.9rem] hover:bg-dark-blue hover:text-white">
                      3
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[0.75rem] font-semibold leading-[1.25rem] font-montserrat">
                      Contoh Dalam Membangun Design System
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={undone_play_button}
                    alt="success-play-button"
                    width="20"
                  />
                </div>
              </div>

              <div className="chapter-section flex flex-col gap-2 ml-[1.35rem] mr-[1.5rem] mt-2">
                <div className="chapter-title-section flex items-center justify-between">
                  <span className="font-montserrat font-extrabold text-dark-blue text-[0.8rem] leading-[2.25rem]">
                    Chapter 2 - Memulai Desain
                  </span>
                  <span className="font-montserrat text-[#489CFF] text-[0.8rem] font-extrabold leading-[2.25rem]">
                    120 Menit
                  </span>
                </div>
              </div>

              <div className="chapter-card-section flex flex-col items-center gap-1 ml-[1.35rem] mr-[1.5rem]">
                <div className="card-index-section flex justify-between w-full items-center border-b-2 border-[#EBF3FC] py-[0.25rem]">
                  <div className="number-title-section flex items-center gap-2">
                    <span className="index-number-section bg-[#EBF3FC] rounded-[100%] px-[1rem] py-[0.65rem] flex items-center font-montserrat text-[#202244] text-[0.8rem] font-bold leading-[0.9rem]">
                      4
                    </span>
                    <span className="course-title-section text-[rgba(0,0,0,0.80)] text-[0.75rem] font-semibold leading-[1.25rem] font-montserrat">
                      Color Pallete
                    </span>
                  </div>
                  <img
                    className="play-btn"
                    src={locked}
                    alt="success-play-button"
                    width="20"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* End Mobile */}
    </div>
  );
};

export default DetailKelasPage;
