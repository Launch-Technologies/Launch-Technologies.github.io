const MJReducer = (state, action) => {
  switch (action.type) {
    case 'POST_MJ':
      return {
        ...state,
      };
    case 'SET_FIELD_VALUE':
      const { field, value, isFile } = action.payload;
      const fd = state.forms;
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
      }

      return {
        ...state,
        forms: fd,
      };

    case 'RESET_FORM':
      return {
        ...state,
        forms: new FormData(),
      };

    case 'GET_SKILLS':
      return {
        ...state,
        skills: action.payload,
      };
    default:
      break;
  }
};

export default MJReducer;
