import InputName from "./InputName";
import InputBrief from "./InputBrief";
import InputCareerP from "./InputCareerP";
import InputCheckPoint from "./InputCheckPoint";
import InputExpectations from "./InputExpectations";
import InputRenum from "./InputRenum";
import SelectBadges from "./SelectBadges";
import UploadPhoto from "./UploadPhoto";
import UploadRelFiles from "./UploadRelFiles";

let title = {
  1: "Write a Name of Task",
  2: "Upload a Cover Photo",
  3: "Write a Brief",
  4: "Select Badges",
  5: "Write a Renumeration",
  6: "Write a Expectation",
  7: "Write a Career Prospect",
  8: "Write a Checkpoint",
  9: "Upload Relevant Files",
};
const NewForms = ({ order, form }) => {
  switch (order) {
    case 1:
      return <InputName {...{ form }} />;
    case 2:
      return <UploadPhoto {...{ form }} />;
    case 3:
      return <InputBrief {...{ form }} />;
    case 4:
      return <SelectBadges {...{ form }} />;
    case 5:
      return <InputRenum {...{ form }} />;
    case 6:
      return <InputExpectations {...{ form }} />;
    case 7:
      return <InputCareerP {...{ form }} />;
    case 8:
      return <InputCheckPoint {...{ form }} />;
    default: // 9
      return <UploadRelFiles {...{ form }} />;
  }
}

export { NewForms, title }