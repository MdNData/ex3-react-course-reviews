export const Description = ({name, job, text}) => {
  return (
    <div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </div>
  );
};
