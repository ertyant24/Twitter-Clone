import { topics } from '../../utils/Consts'
import { numberFormat } from '../../utils/Format';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#171717',
  border: '2px solid #0a0a0a',
  borderRadius: "14px",
  boxShadow: 24,
  p: 1,
  height: 500
};

function Trends() {

  const [open1, setOpen1] = React.useState(false);
  const handleOpen = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

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
      <div className='mb-4' style={{ backgroundColor: "rgb(1, 2, 2)", borderRadius: "16px", }}>
        <div className='d-flex flex-row justify-content-between pe-1 position-sticky align-items-center' style={{ top: "0px", zIndex: "1", height: "34px", backgroundColor: "black" }}>
          <h5 className='' style={{ fontSize: "16px", fontWeight: "700", paddingLeft: "8px", paddingTop: "1px" }}><Link clasName='text-decoration-none' to="/"><i onClick={() => {document.querySelector(".home-14").style.display = 'block'}} style={{ fontSize: "14px", cursor: "pointer", marginRight: "34px" }} class="fa-solid fa-arrow-left text-white"></i></Link>Gündemler</h5>
          <i onClick={handleOpen} style={{ cursor: "pointer" }} class="fa-solid fa-gear"></i>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography style={{padding: "4px 8px", fontSize: "16px"}} id="modal-modal-title" variant="h6" component="h2">
              <i style={{cursor: "pointer"}} onClick={handleClose1} class="fa-solid fa-xmark me-4"></i> Gündemler
              </Typography>
              <Typography style={{marginTop: "20px", padding: "4px 8px"}} id="modal-modal-description" sx={{ mt: 2 }}>
                Konum
              </Typography>
              <div style={{padding: "4px 8px", marginTop: "20px"}} className='d-flex justify-content-between'>
                İçeriği bu konumda göster
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="" width="10px"/>
                </div>
              </div>
              <p className='text-secondary ps-2' style={{fontSize: "12px", marginTop: "-6px"}}>Bu özellik etkin olduğunda, şu anda etrafında olup bitenleri görürsün.</p>
              <hr />
              <div className='ps-2'>Kişiselleştirme</div>
              <div style={{padding: "4px 8px", marginTop: "20px"}} className='d-flex justify-content-between'>
                İçeriği bu konumda göster
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="" width="10px"/>
                </div>
              </div>
              <p className='text-secondary ps-2' style={{fontSize: "12px", marginTop: "-6px"}}>Bu özellik etkin olduğunda, şu anda etrafında olup bitenleri görürsün.</p>
            </Box>
          </Modal>
        </div>
        {
          topics.map((topic) => (
            <div key={topic.id} style={{ position: "relative", padding: "3px 4px" }} className='d-flex mt-2 home-7'>
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
      </div>
    </>
  )

}

export default Trends
