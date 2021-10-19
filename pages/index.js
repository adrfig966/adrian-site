import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

export default function Home() {
  //Redirect from this page using NGINX config
  return (
    <div className={styles.container}>
      You are not supposed to be seeing this page.
    </div>
  );
}
