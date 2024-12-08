import React, { useState } from 'react';
import "../styles/overview.css"
import { FaAngleDown } from "react-icons/fa";
const Overview = () => {
  const [firstName, setFirstName] = useState("");
  const [visible, setVisible] = useState(true);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] =
    useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };
  const showDiv = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className='overview-form'>

        <h1>Form in React</h1>
        <div onClick={showDiv} style={{textAlign: 'right'}}><FaAngleDown /></div>
        {visible && <fieldset>
          <form action="#" method="get">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '48%' }}>
                <label for="firstname">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName(e.target.value)
                  }
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div style={{ width: '48%' }}>
                <label for="lastname">Last Name*</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: '48%' }}>
                <label for="email">Enter Email* </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter email"
                  required
                />
              </div>
              <div style={{ width: '48%' }}>
                <label for="tel">Contact*</label>
                <input
                  type="tel"
                  name="contact"
                  id="contact"
                  value={contact}
                  onChange={(e) =>
                    setContact(e.target.value)
                  }
                  placeholder="Enter Mobile number"
                  required
                />
              </div>
            </div>

            <label for="gender">Gender*</label>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={gender === "male"}
              onChange={(e) =>
                setGender(e.target.value)
              }
            />
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              checked={gender === "female"}
              onChange={(e) =>
                setGender(e.target.value)
              }
            />
            Female
            <input
              type="radio"
              name="gender"
              value="other"
              id="other"
              checked={gender === "other"}
              onChange={(e) =>
                setGender(e.target.value)
              }
            />
            Other
            <label for="lang">
              Your best Subject
            </label>
            <input
              type="checkbox"
              name="lang"
              id="english"
              checked={subjects.english === true}
              onChange={(e) =>
                handleSubjectChange("english")
              }
            />
            English
            <input
              type="checkbox"
              name="lang"
              id="maths"
              checked={subjects.maths === true}
              onChange={(e) =>
                handleSubjectChange("maths")
              }
            />
            Maths
            <input
              type="checkbox"
              name="lang"
              id="physics"
              checked={subjects.physics === true}
              onChange={(e) =>
                handleSubjectChange("physics")
              }
            />
            Physics
            <label for="file">Upload Resume*</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) =>
                setResume(e.target.files[0])
              }
              placeholder="Enter Upload File"
              required
            />
            <label for="url">Enter URL*</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={(e) =>
                setUrl(e.target.value)
              }
              placeholder="Enter url"
              required
            />
            <label>Select your choice</label>
            <select
              name="select"
              id="select"
              value={selectedOption}
              onChange={(e) =>
                setSelectedOption(
                  e.target.value
                )
              }
            >
              <option
                value=""
                disabled
                selected={selectedOption === ""}
              >
                Select your Ans
              </option>
              <optgroup label="Beginers">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">
                  JavaScript
                </option>
              </optgroup>
              <optgroup label="Advance">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">
                  Express
                </option>
                <option value="t">
                  MongoDB
                </option>
              </optgroup>
            </select>
            <label for="about">About</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              onChange={(e) =>
                setAbout(e.target.value)
              }
              placeholder="About your self"
              required
            ></textarea>
            <button
              type="reset"
              value="reset"
              onClick={() => handleReset()}
            >
              Reset
            </button>
            <button
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </fieldset>}
      </div>
      <div className="overview-desc">
        <h1>About Overview</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </>
  )
}



export default Overview;
