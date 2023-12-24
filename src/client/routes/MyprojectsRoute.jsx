import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/AuthContext";
import { useParams } from "react-router-dom";
import likeDislike from "/src/client/hooks/LikeDislike.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MyItemList = () => {
  const { userId } = useParams();
  const [items, setItems] = useState([]);
  const [projects, setProjects] = useState([]);
  const [userInfo, setuserInfo] = useState([]);
  const { isLoggedIn, setUser, loggedInUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const user = { id: userId };

  function findIndexById(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  console.log("items", projects);
  useEffect(() => {

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const projectsResponse = await fetch(
          `/api/projects?employer_id=${loggedInUser.id}`
        );
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);
        

        const userInfoResponse = await fetch(`/user`);
        const userInfoData = await userInfoResponse.json();

        

        setuserInfo(userInfoData);
        const transformedData = Object.keys(userInfoData).map(
          (key) => userInfoData[key]
        );
        setuserInfo(transformedData);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [refreshFlag]);


  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="grid grid-cols-3 gap-3 m-10">
        {projects[0].map((item) => {
          const pID = item.project_id;
          const lID = parseInt(pID);
          let projectIndex = findIndexById(projects.entities, lID);
          var projectImage = projects.entities[projectIndex];


          return (
            <div
              key={item.id}
              className="w-120 h-120 rounded-lg overflow-hidden shadow-lg  bg-white rounded-lg shadow-md"
            >
              <div className="">
                <button
                  onClick={() => {
                    handleLikeDislike(item.project_id, "dislike");
                    setRefreshFlag((prevFlag) => !prevFlag);
                  }}
                >
                </button>
              </div>

              <a href={`/projects/${item.project_id}`}>
                <img
                  src={`${
                    projects.entities[findIndexById(projects.entities, lID)]
                      .images[0]
                  }`}
                  alt={
                    projects.entities[findIndexById(projects.entities, lID)]
                      .title
                  }
                  className="w-full h-40 object-cover object-center rounded-t-lg"
                />
              </a>

              <div className="p-4 flex flex-col items-start">
                <a
                  href={`/projects/${item.project_id}`}
                  className="flex items-center"
                >
                  <img
                    src={`${userInfo[findIndexById(userInfo, lID)].profile_picture}`} // Use 'project.profile_picture'
                    // alt={projects[findIndexById(projects, lID)].username} // Use 'projects[findIndexById].username' for alt text
                    className="w-10 h-10 rounded-full object-cover object-center border-2 border-gray-500"
                  ></img>
                  <span className="text-lg font-semibold pl-10 text-black ">
                    <p>
                      {
                        projects.entities[findIndexById(projects.entities, lID)]
                          .title
                      }
                    </p>
                  </span>

                  
                  <aside className="flex justify-end items-center ml-5 mt-6">
              
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLikeDislike(item.project_id, "dislike");
                    setRefreshFlag((prevFlag) => !prevFlag);
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} size="lg" style={{color: "#e32400",}} />
                </button>

              </aside>

                </a>
                <div>
                  <p className="text-sm text-gray-600"></p>
                  <p>{userInfo[findIndexById(userInfo, lID)].username}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyItemList;
