import React from "react";
import "./JobPosting.css";

const JobPosting = ({ url, title, by, time }) => {
  const foramattedTime = new Date(time * 1000).toLocaleString();
  return (
    <div className="post" role="listitem">
      <h2 className="post-title">
        <a
          className={url ? "" : "inactive-link"}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </h2>
      <span className="post-metadata">
        By {by} - {foramattedTime}
      </span>
    </div>
  );
};

export default JobPosting;
