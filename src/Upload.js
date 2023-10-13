import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import storage from './server/firebase';
import axios from 'axios';
import './Upload.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Upload() {
  const [imgUrl, setImgUrl] = useState(null);
  const [url, setUrl] = useState(null);
  const [songs, setSongs] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    duration: '',
    image: '',
    song: '',
  });

  const fetchSongs = async () => {
    try {
      const response = await axios.get('https://spoticy-clone.onrender.com/allsongs');
      setSongs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const storeImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (error) => {
        alert(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUrl(downloadURL);
          toast("Uploaded");
          setFormData((prevData) => ({
            ...prevData,
            image: downloadURL,
          }));
        } catch (error) {
          console.error(error);
        }
      }
    );
  };

  const storeSong = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `music/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (error) => {
        alert(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImgUrl(downloadURL);
          toast("Uploaded");
          setFormData((prevData) => ({
            ...prevData,
            song: downloadURL,
          }));
        } catch (error) {
          console.error(error);
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(imgUrl==null){
      toast("song must");
      return;
    }

    if(url==null){
      toast("Image must");
      return;
    }

    axios
      .post('https://spoticy-clone.onrender.com/upload/song', formData)
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });

    setFormData({
      title: '',
      artist: '',
      album: '',
      duration: '',
      image: '',
      song: '',
    });
  };

  return (
    <div className="App">
      <div className='app-inside'>
      <form onSubmit={handleSubmit} className="form">
        <div className='flex'>
        <div>
          <input
            type="text"
            id="title"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="artist"
            placeholder="Artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className='flex'>
        <div>
          <input
            type="text"
            id="album"
            placeholder="Album"
            name="album"
            value={formData.album}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="duration"
            placeholder="Duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className='flex'>
          <div>
          <p className='fl-txt'>Image</p>
          </div>
          <div>
        <input type="file" name="image" onChange={storeImage} />
        </div>
        <div>
        {url && <img src={url} alt="Uploaded" />}
        </div>
        </div>

        <div className='flex'>
        <div>
        <p className='fl-txt'>Song</p>
        </div>
        <div>
        <input type="file" name="song" onChange={storeSong} />
        </div>
        <div>
        {imgUrl && (
          <p>{imgUrl!=null?"Uploaded":"Not Uploaded"}</p>
        // <audio controls>
        //   <source src={imgUrl} type="audio/mpeg" />
        // </audio>
      
      )}  </div>
        </div>
        
        <button type="submit">Upload</button>
      </form>

      
      
      <ToastContainer />
      </div>
<div className='pos'>
      {songs.map((data) => {
        return (
          <div className="flex  sd" key={data.id}>
            <div className='d-flex'>
              <div  className='img-tst'>
                <img src={data.image} alt="Song Cover" />
              </div>
              <div>
                <p>{data.title.slice(0, 10)}</p>
              </div>
            </div>
            <div>
              <p>{data.song?"added":"Not added"}</p>
              {/* <audio controls>
                <source src={data.song} type="audio/mpeg" />
              </audio> */}
            </div>
          </div>
        );
      })}
      </div>

    </div>
  );
}

export default Upload;
