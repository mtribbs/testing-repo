const [name, setName] = useState("");
const [info, setInfo] = useState("");
const [bio, setBio] = useState([
  {
    bioName: "Name",
    bioInfo: "Info",
  },
]);

const handleSubmitBio = (e) => {
  console.log("Bio submit");
};

<div className="form-box">
<BioForm
  name={name}
  setName={setName}
  info={info}
  setInfo={setInfo}
  handleSubmitBio={handleSubmitBio}
/>
</div>