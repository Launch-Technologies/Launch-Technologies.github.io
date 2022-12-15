import InputBrief from './InputBrief';
import InputCareerP from './InputCareerP';
import InputCheckPoint from './InputCheckPoint';
import InputExpectations from './InputExpectations';
import InputName from './InputName';
import InputRenum from './InputRenum';
import SelectBadges from './SelectBadges';
import UploadPhoto from './UploadPhoto';
import UploadRelFiles from './UploadRelFiles';

let title = {
  1: 'Write a Name of Job',
  2: 'Upload a Cover Photo',
  3: 'Write a Brief',
  4: 'Select Badge Skill',
  5: 'Write a Renumeration',
  6: 'Write a Expectation',
  7: 'Write a Career Prospect',
  8: 'Write a Checkpoint',
  9: 'Upload Relevant Images',
};
const NewForms = ({ order }) => {
  switch (order) {
    case 1:
      return <InputName />;
    case 2:
      return <UploadPhoto />;
    case 3:
      return <InputBrief />;
    case 4:
      return <SelectBadges />;
    case 5:
      return <InputRenum />;
    case 6:
      return <InputExpectations />;
    case 7:
      return <InputCareerP />;
    case 8:
      return <InputCheckPoint />;
    default: // 9
      return <UploadRelFiles />;
  }
};

export { NewForms, title };
