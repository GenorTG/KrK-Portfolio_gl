import PropTypes from 'prop-types';

const YoutubeEmbed = ({ embedId, w, h }: { embedId: string, w: string, h: string}) => (
  <div className="video-responsive">
    <iframe
      width={w}
      height={h}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};