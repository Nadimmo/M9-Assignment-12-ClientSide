import React from "react";
import useSurverys from "../../components/Hooks/useSurverys";
import { Link } from "react-router-dom";

const SurveryPage = () => {
  const { surverys } = useSurverys();
  // console.log(surverys);

  return (
    <div className="lg:grid grid-cols-3 gap-6 items-center rounded-xl lg:p-6 mb-6 mx-auto ">
      {surverys.map((survery) => (
        <>
          <div className="card bg-[#7BD3EA]  lg:w-96 shadow-lg transition-transform hover:scale-105 lg:mt-0 mt-4">
            <div className="card-body">
              <h2 className="card-title">{survery.title}</h2>
              <p>{survery.description}</p>
              <div className="card-actions justify-end">
                <Link
                  className="btn  bg-[#FC8F54]"
                  to={`/surverys/${survery._id}`}
                >
                  Survey Details
                </Link>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default SurveryPage;
