import PropTypes from "prop-types";

const CmsItem = ({ setStudents, students }) => {
  const [isEditing, setIsEditing] = useState(false);
  const editHandler = () => setIsEditing((prev) => !prev);
  const cmsDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      setStudents((prev) => prev.filter());
      alert("삭제했습니다.");
    } else {
      alert("취소했습니다.");
    }
  };

  return (
    <div>
      <h1>CmsItem</h1>
    </div>
  );
};

export default CmsItem;
TodoItem.propTypes = {
  setStudents: PropTypes.func,
  students: PropTypes.array,
};
