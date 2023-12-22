import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[80vh]">
      <div
        className="hero h-full w-full object-cover object-fit"
        style={{
          backgroundImage: "url(https://i.ibb.co/J7pPWRn/todo-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Task Mastery </h1>
            <p className="mb-5">
              Streamline your tasks, boost productivity, and stay organized.
              Achieve more with our user-friendly task management solution.
            </p>
            <Link to="/login">
              <button className="btn btn-primary">Explore It</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
