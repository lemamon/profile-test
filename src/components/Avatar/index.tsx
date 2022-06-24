const Avatar = ({ url }: { url: string }) => {
  return (
      <div className="avatar">
        <img src={url} alt="avatar" />
      </div>
  );
};

export default Avatar;
