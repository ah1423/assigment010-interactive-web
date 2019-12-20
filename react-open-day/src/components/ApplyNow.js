import React from "react";

export const ApplyNow = () => {
  return (
    <div
      className="tab-pane"
      id="Apply"
      role="tabpanel"
      aria-labelledby="Apply-tab"
    >
      <h2 className="text-center">Applying to UCP is easy!</h2>
      <p className="text-center">
        To apply for a course just follow the three-step process below.
      </p>
      <section className="row">
        <div className="col-sm text-center">
          <img src="https://www.ucp.ac.uk/upload/img_cache/file-19576b59d935aa61ef54de04e82fdb9b49f.jpg" className="rounded" alt="..." />
          <h4>Choose Your Course</h4>
          <p>
            UCP offers a wide range of undergraduate, foundation degrees and
            bachelors, as well as postgraduate diploma qualifications.
          </p>
        </div>

        <div className="col-sm text-center">
          <img src="https://www.ucp.ac.uk/upload/img_cache/file-196e2b671bf21b7380aae666d881e1def66.jpg" className="rounded" alt="..." />
          <h4>Check Your Qualifications</h4>
          <p>
            Once you have decided on the course you would like to study, you
            need to check that you meet the entry requirements.
          </p>
        </div>

        <div className="col-sm text-center">
          <img src="https://www.ucp.ac.uk/upload/img_cache/file-198e289fd1e6af1e2fc510a9d312a2a19ff.jpg" className="rounded" alt="..." />
          <h4>Make an Application</h4>
          <p>
            Once you have chosen your degree course you are ready to make an
            application.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
