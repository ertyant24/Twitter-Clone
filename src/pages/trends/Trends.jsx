import { topics } from '../../utils/Consts'
import { numberFormat } from '../../utils/Format';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';

function Trends() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const deleteTop = (id) => {
    console.log(`deleting this topic ${id}`);
    topics.filter((top) => top.id == id);
    handleClose();
  }


  return (
    <>
      <div className='' style={{ backgroundColor: "rgb(1, 2, 2)", borderRadius: "16px", }}>
        <div className='d-flex flex-row justify-content-between pe-1' style={{}}>
          <h5 className='position-sticky' style={{ fontSize: "16px", fontWeight: "700", paddingLeft: "8px", paddingTop: "6px", top: "0px" }}><i style={{ fontSize: "14px", cursor: "pointer" }} class="fa-solid fa-arrow-left me-5"></i>Gündemler</h5>
          <i style={{cursor: "pointer"}} class="fa-solid fa-gear pt-2"></i>
        </div>

        {
          topics.map((topic) => (
            <div key={topic.id} style={{ position: "relative", padding: "6px 8px" }} className='d-flex mt-2 home-7'>
              <div className='d-flex flex-column'>
                <span style={{ fontSize: "12px" }} className='text-secondary'>{topic.title}</span>
                <span style={{ fontSize: "15px" }}>
                  {topic.topic.type == "query" ? `#${topic.topic.value}` : topic.topic.value}
                </span>
                <span style={{ fontSize: "12px" }} className='text-secondary'>{numberFormat(topic.postCount)} posts</span>
              </div>
              <div onClick={handleClick} className='home-10 rounded-circle' style={{ position: "absolute", top: "8px", right: "20px" }} aria-describedby={id} variant="" >
                <i class="fa-solid fa-ellipsis" style={{ fontSize: "14px" }}></i>
              </div>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}

                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <div style={{ cursor: "pointer", boxShadow: "2px 2px 4px black", border: "2px solid black" }}>
                  <div onClick={() => { deleteTop(topic.id) }} className='text-white' style={{ width: "300px", padding: "10px 15px", fontSize: "13px", backgroundColor: " rgb(22, 24, 28)" }}>
                    <i style={{ fontSize: "15px" }} class="fa-regular fa-face-frown me-3"></i> İlgimi çekmiyor
                  </div>
                  <div className='text-white' style={{ width: "300px", padding: "10px 15px", fontSize: "13px", backgroundColor: " rgb(22, 24, 28)" }}>
                    <i style={{ fontSize: "15px" }} class="fa-regular fa-face-frown me-3"></i> Bu gündem başlığı zararlı, spam içeriyor
                  </div>
                </div>
              </Popover>
            </div>
          ))
        }
        <div style={{ padding: "25px 15px", height: "50px", fontSize: "14px" }} className='home-7 d-flex align-items-center'>
          <Link to="/trends" className='text-decoration-none text-info'>Daha fazla göster</Link>
        </div>
      </div>
    </>
  )

}

export default Trends
