import Button from "../Atoms/Button";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer-clean text-light gradient-1 ">
        <div className="container d-flex justify-content-between">
          <div className="">
            <h4>Syndicate HQ</h4>
            <p>@copyright</p>
          </div>
          <div className="align-items-center">
            <Button className="btn-light">
              Github
              <FaGithub className="mx-2 fs-5 mb-1" />
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
