import React from 'react';

const Commits = ({action, img, project, time_ago, user, expand, quantity, branch, commit, commits_user, remaining, new_repo, edited, description, component_title}) => {

    return(
        <div className="d-flex flex-items-baseline border-bottom border-gray py-3">
            <span className="mr-3">
                <img
                    className="avatar"
                    src={img}
                    width="32"
                    height="32"
                    alt={user}
                />
            </span>

            <div className="d-flex flex-column width-full">
                <div className="d-flex flex-justify-between flex-items-baseline">
                    <div>
                        <strong>{user} </strong>{action} <strong>{project}</strong>
                        <span className="f6 text-gray-light ml-1">{time_ago}</span>
                    </div>

                    {expand?
                        <span className="Details-content--shown">
                            <svg className="octicon octicon-unfold link-gray mr-1"
                                 viewBox="0 0 14 16"
                                 version="1.1"
                                 width="14"
                                 height="16"
                            >
                                <path fillRule="evenodd"
                                      d="M11.5 7.5L14 10c0 .55-.45 1-1 1H9v-1h3.5l-2-2h-7l-2 2H5v1H1c-.55 0-1-.45-1-1l2.5-2.5L0 5c0-.55.45-1 1-1h4v1H1.5l2 2h7l2-2H9V4h4c.55 0 1 .45 1 1l-2.5 2.5zM6 6h2V3h2L7 0 4 3h2v3zm2 3H6v3H4l3 3 3-3H8V9z"
                                />
                            </svg>
                        </span>

                        :null
                    }

                </div>


                <div className="Box p-3 mt-2">
                    <div>
                        <div className="f5 lh-condensed ">
                            {commit?
                                <div>
                                <span>{quantity} <a href={"/"} className="branch-name">{branch}</a></span>
                                {commits_user.map((commit, index)=>{
                                    return(
                                        <div className="commit-meta commit-author-section d-flex flex-items-center mt-2 mb-2" key={index}>
                                            <div className="AvatarStack flex-self-start ">
                                                <div className="AvatarStack-body">
                                                    <img height="20"
                                                         width="20"
                                                         alt={user}
                                                         className="avatar"
                                                         src={commit.img}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <span><a href={"/"}>{commit.id_commit}</a> {commit.action}</span>
                                            </div>
                                        </div>
                                    );
                                })}

                                    <span className={"f6 text-gray"}>{remaining}</span>
                                </div>


                                :
                                <div>
                                    {edited?
                                        <div className="f5 lh-condensed text-gray-dark">
                                            <svg
                                                className="octicon octicon-book mr-2"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                width="16"
                                                height="16"
                                            >
                                                <path fillRule="evenodd"
                                                      d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                                                />
                                            </svg>
                                            <span>Edited <a href={"/"}>{component_title}</a></span>
                                        </div>
                                        :<strong>{project}</strong>}



                                    {new_repo?
                                        <div className="float-right d-inline-block js-toggler-container starring-container ">
                                            <button
                                                name="button"
                                                type="submit"
                                                className="btn btn-sm ml-2 mb-2 js-toggler-target"
                                                value="Star"
                                            >
                                                <svg
                                                    className="octicon octicon-star mr-1"
                                                    viewBox="0 0 14 16"
                                                    version="1.1"
                                                    width="14"
                                                    height="16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                                                    />
                                                </svg>
                                                Star
                                            </button>
                                        </div>
                                        :null}

                                    <p className="f6 text-gray mt-2 mb-0">
                                        {description}
                                    </p>
                                </div>

                            }


                        </div>

                    </div>
                </div>

            </div>
        </div>


    );
};

export default Commits;