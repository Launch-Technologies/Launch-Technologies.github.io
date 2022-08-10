const MJReducer = (state, action) => {
  switch (action.type) {
    case 'POST_MJ':
      return {
        ...state,
      };
    case 'SET_FIELD_VALUE':
      const { field, value, isFile } = action.payload;
      const fd = state.forms;
      let newVal = {};

      if (!isFile) {
        fd.has(field) ? fd.set(field, value) : fd.append(field, value);
      } else {
        fetch(value)
          .then((res) => res.blob())
          .then((blob) => {
            fd.has(field)
              ? fd.set(field, blob, 'file.jpg')
              : fd.append(field, blob, 'file.jpg');
          });
        newVal[field] = value;
      }

      return {
        ...state,
        forms: fd,
        ...newVal,
      };

    case 'RESET_FORM':
      const newFd = new FormData();
      newFd.set(
        'checkpoints',
        '{"cp0":"not yet started","cp100":"Micro-Job Completed"}'
      );
      return {
        ...state,
        forms: newFd,
        selected_skills: [],
        upload_relevant_files: [],
      };

    case 'GET_SKILLS':
      return {
        ...state,
        skills: action.payload,
      };

    case 'SET_SKILLS':
      return {
        ...state,
        selected_skills: action.payload,
      };

    case 'SET_RELEVANT_FILES':
      return {
        ...state,
        upload_relevant_files: action.payload,
      };

    default:
      break;
  }
};

export default MJReducer;
