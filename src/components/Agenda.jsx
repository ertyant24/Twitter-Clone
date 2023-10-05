import React from 'react';
import { topics } from '../utils/Consts'

function Agenda() {
    return (
        <>
            <div className='mt-3' style={{ backgroundColor: "rgb(22, 24, 28)", borderRadius: "16px",  }}>
                <h5 className='' style={{ fontSize: "18px", fontWeight: "700", paddingLeft: "15px", paddingTop: "10px" }}>İlgini çekebilecek gündemler</h5>
                {
                    topics.map((topic) => (
                        <div style={{ position: "relative",  padding: "5px 15px" }} className='d-flex mt-2 home-7'>
                            <div className='d-flex flex-column'>
                                <span style={{ fontSize: "12px" }} className='text-secondary'>{topic.title}</span>
                                <span style={{ fontSize: "15px" }}>
                                    {topic.topic.type == "query" ? `#${topic.topic.value}` : topic.topic.value}
                                </span>
                                <span style={{ fontSize: "12px" }} className='text-secondary'>{topic.postCount} posts</span>
                            </div>
                            <div style={{ position: "absolute", top: "20px", right: "10px" }}>
                                <i class="fa-solid fa-ellipsis" style={{ fontSize: "14px" }}></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Agenda
