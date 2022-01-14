import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Form,
  FormField,
  FormTextArea,
  Button,
  FormGroup,
  Card,
  CardHeader,
  CardDescription,
} from "semantic-ui-react";

function App() {
  const firstRender = useRef(true);

  const [name, setName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [currentBioId, setCurrentBioId] = useState(null);
  const [bioInfo, setBioInfo] = useState([]);

  const clearInputBio = () => {
    setName("");
    setAboutMe("");
  };

  const addBio = () => {
    setBioInfo([
      ...bioInfo,
      {
        bioName: name,
        bioAboutMe: aboutMe,
        id: uuidv4(),
      },
    ]);
    clearInputBio();
  };

  const editBio = (bio) => {
    setName(bio.bioName);
    setAboutMe(bio.bioAboutMe);
    setCurrentBioId(bio.bioId);
  };

  const updateBio = () => {
    setBioInfo(
      bioInfo.map((bio) =>
        bio.bioId === currentBioId
          ? { ...bioInfo, bioName: name, bioAboutMe: aboutMe }
          : bioInfo,
      ),
    );
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setCurrentBioId(null);
    !currentBioId ? addBio() : updateBio();
    clearInputBio();
  };

  // const removeBio = (id) => {
  //   setBioInfo(bioInfo.filter((bio) => bio.id !== id));
  // };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      localStorage.setItem("Bio", JSON.stringify([...bioInfo]));
    }
  }, [bioInfo]);

  useEffect(() => {
    if (localStorage.getItem("Bio") !== null) {
      const newBio = localStorage.getItem("Bio");
      setBioInfo(JSON.parse([...bioInfo, newBio]));
    }
  }, []);

  return (
    <div>
      <Form onSubmit={handleSumbit}>
        <FormGroup>
          <label>Name</label>
          <input
            className="subjectInput"
            type="text"
            placeholder="My name is..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormField>
          <label className="captionLabel">About me</label>
          <FormTextArea
            className="captionInput"
            type="text"
            placeholder="About me..."
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
          />
        </FormField>

        <Button type="submit" className="postBtn">
          {currentBioId !== null ? "Update" : "Save"}
        </Button>
      </Form>
      {bioInfo.map((bio) => (
        <Card key={bio.id}>
          <CardHeader>{bio.bioName}</CardHeader>
          <CardDescription>{bio.bioAboutMe}</CardDescription>
          {/* <button onClick={() => removeBio(bio.id)}>Delete</button> */}
          <button onClick={() => editBio(bio)}>Edit</button>
        </Card>
      ))}
    </div>
  );
}

export default App;
