import React from "react";
import logo from "../../../../assets/rsz_1logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-500">
      <footer className="footer py-10  text-white w-3/4 mx-auto">
        <div>
          <img className="rounded-lg" src={logo} alt="" />
          <p>
            Otaku Importer Ltd.
            <br />
            Providing reliable anime figure since 2016
          </p>
          <p>&copy; All rights reserved to-2023-Kamrul</p>
          <div className="flex text-4xl">
            <Link to="https://www.instagram.com/">
              <FaInstagramSquare />
            </Link>

            <Link to="https://www.facebook.com/">
              <FaFacebookSquare></FaFacebookSquare>
            </Link>

            <Link to="https://twitter.com/home">
              <FaTwitterSquare></FaTwitterSquare>
            </Link>
            <Link to="https://www.youtube.com/">
              <FaYoutubeSquare></FaYoutubeSquare>
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
