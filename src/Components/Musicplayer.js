import  React,{useEffect,useRef,useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import setSongdetail from './Actions';

const WallPaper = styled('div')({
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
    transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
    '&:before': {
        content: '""',
        width: '140%',
        height: '140%',
        top: '-40%',
        right: '-50%',
        background:
            'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
    },
    '&:after': {
        content: '""',
        width: '140%',
        height: '140%',
        bottom: '-50%',
        left: '-30%',
        background:
            'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
        transform: 'rotate(30deg)',
    },
});

const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 300,
    maxWidth: '100%',
    margin: 'auto',
    zIndex: 1,
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
    backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {


    const [duration, setDuration] = useState(0);

    const play=()=>{
        dispatch(setSongdetail(states.songname,states.singer,states.imgurl, states.songurl,true ));
    
    };

const playnext = () => {
    console.log(states.all);
    const currentSong = states.all.find(song => song.title===states.songname);
    
    if (currentSong) {
        const currentIndex = states.all.indexOf(currentSong);

        if (currentIndex !== -1 && currentIndex < states.all.length - 1) {
            const nextSong = states.all[currentIndex + 1];
            console.log("Next Song:", nextSong);
            dispatch(setSongdetail(nextSong.title,nextSong.artist,nextSong.image, nextSong.song,true ));
         
        } else {
            console.log("No next song available.");
           
        }
    } else {
        console.log("Current song not found in the array.");
       
    }
}


const playbefore = () => {
    console.log(states.all);
    const currentSong = states.all.find(song => song.title===states.songname);
    
    if (currentSong) {
        const currentIndex = states.all.indexOf(currentSong);
        if(currentIndex>0){
            const nextSong = states.all[currentIndex - 1];
            console.log("Next Song:", nextSong);
            dispatch(setSongdetail(nextSong.title,nextSong.artist,nextSong.image, nextSong.song,true ));
        }

        // if (currentIndex > 0) {
      
        //     console.log("Next Song:", nextSong);
        //     dispatch(setSongdetail(nextSong.title,nextSong.artist,nextSong.image, nextSong.song,true ));
         
        // } else {
        //     console.log("No next song available.");
           
        // }
    } else {
        console.log("Current song not found in the array.");
       
    }
}

    const pause=()=>{
        dispatch(setSongdetail(states.songname,states.singer,states.imgurl, states.songurl,false ));
    };
    const dispatch = useDispatch();
    const audioRef = useRef(null);
    const states = useSelector((state) => state);


    const theme = useTheme();
    const [position, setPosition] = useState(0);



    const handleSliderChange = (_,value) => {
        const audio = audioRef.current;
        audio.currentTime=value;
        setPosition(value); 
    };

    const handlevolumechange =(_,value)=>{
        const audio = audioRef.current;
        audio.volume=value/100;
        console.log(value/100);
    }


    useEffect(()=>{
        if(states.songurl!=null){
            const audio = audioRef.current;
            setPosition(audioRef.current.currentTime);
  
            const handleLoadedMetadata = () => {
                setDuration(audio.duration);
            };
            const handleTimeUpdate = () => {
                setPosition(audio.currentTime);
            };
            const handleEnded = () => {
                dispatch(setSongdetail(states.songname,states.singer,states.imgurl, states.songurl,false ));
            };
        
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.addEventListener('ended', handleEnded);
            };
        }
        console.log('in');
        if(states.isplaying===true){
            audioRef.current.play();
        }else{
            audioRef.current.pause();
        }

    },[states])

    function formatDuration(value) {
        const minutes = Math.floor(value / 60);
        const seconds = Math.floor(value % 60);
    
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
        return `${minutes}:${formattedSeconds}`;
    }


    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';



                useEffect(()=>{
                    if(states.isplaying){
                        audioRef.current.play();
                    }else{
                        audioRef.current.pause();
                    }
                },[states]);



            
    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Widget>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CoverImage>
                        <img
                            alt=""
                            src={states.imgurl}
                        />
                    </CoverImage>
                    <Box sx={{ ml: 1.5, minWidth: 0 }}>
                        <Typography variant="caption" color="text.secondary" fontWeight={500}>
                            {/* {states.singer} */}
                            Beats
                        </Typography>
                        <Typography noWrap>
                            <b> {states.singer} ({states.songname})</b>
                        </Typography>
                        <Typography noWrap letterSpacing={-0.25}>
                           {states.songname} &mdash;  {states.singer}
                        </Typography>
                    </Box>
                </Box>
                <Slider
                    aria-label="time-indicator"
                    size="small"
                    value={position}
                    min={0}
                    step={1}
                    max={duration}
                    onChange={handleSliderChange}
                    sx={{
                        color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&:before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                        ? 'rgb(255 255 255 / 16%)'
                                        : 'rgb(0 0 0 / 16%)'
                                    }`,
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.28,
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                >
                    <TinyText>{formatDuration(position)}</TinyText>
                    <TinyText>-{formatDuration(duration)}</TinyText>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                >
                    <IconButton aria-label="previous song" onClick={playbefore}>
                        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                    <IconButton
                        aria-label={!states.isplaying ? 'play' : 'pause'}
                        onClick={!states.isplaying?play:pause}
                    >
                        {!states.isplaying ? (
                            <PlayArrowRounded
                                sx={{ fontSize: '3rem' }}
                                htmlColor={mainIconColor}
                            />
                        ) : (
                            <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                    <IconButton aria-label="next song" onClick={playnext}>
                        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                </Box>
                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                    <VolumeDownRounded htmlColor={lightIconColor} />
                    <Slider
                        aria-label="Volume"
                        defaultValue={5*100}
                        onChange={handlevolumechange}
                        sx={{
                            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                            '& .MuiSlider-track': {
                                border: 'none',
                            },
                            '& .MuiSlider-thumb': {
                                width: 24,
                                height: 24,
                                backgroundColor: '#fff',
                                '&:before': {
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: 'none',
                                },
                            },
                        }}
                    />
                    <VolumeUpRounded htmlColor={lightIconColor} />
                </Stack>
            </Widget>
            <WallPaper />
            <audio className="bg-none" ref={audioRef} src={states.songurl} />

        </Box>
    );
}