const optional = (name, root, props) => {
  root.required.delete(name);
};

const string = (name, root, props) => {
  props.type = 'string';
};

const int = (name, root, props) => {
  props.type = 'integer';
};

const date = (name, root, props) => {
    props.type = 'date-time'
}

const timestamps = () =>
    (root) => {
        field('createdAt', [date])(root)
        field('updatedAt', [date])(root)
    }

const field = (name, vals) => {
  return root => {
    const props = {};
    root.properties[name] = props;
    root.required.add(name);
    vals.forEach(fn => fn(name, root, props));
  };
};

const clean = state => {
  // convert state set to array
  state.required = [...state.required];
  return state;
};

const schema = (title, fields) => {
  const state = {
    title,
    type: 'object',
    properties: {},
    required: new Set(),
  };
  fields.forEach(fn => fn(state));
  return clean(state);
};

module.exports = {schema, field, string, int, optional, timestamps};
