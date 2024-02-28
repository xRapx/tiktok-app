import vid from '~/assets/videos/123.mp4';

function Video() {
    return (
        <video
            controls
            width={300}
            height={600}
            style={{
                borderRadius: '10px',
            }}
            src={vid}
        ></video>
    );
}

export default Video;
