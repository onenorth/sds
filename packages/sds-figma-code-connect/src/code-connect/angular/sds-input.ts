import figma, { html } from '@figma/code-connect/html';
import {
  INPUT_FIELD_PROPS_NO_LABEL,
  INPUT_FIELD_PROPS_LABEL,
} from 'src/props/sds-input';

figma.connect('<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': false },
  props: INPUT_FIELD_PROPS_NO_LABEL,
  example: ({ disabled, value, placeholder }) =>
    html`<sds-input
      disabled=${disabled}
      defaultValue=${value}
      placeholder=${placeholder}
    ></sds-input>`,
});

figma.connect('<FIGMA_INPUTS_INPUT_FIELD>', {
  variant: { 'Has Label': true },
  props: INPUT_FIELD_PROPS_LABEL,
  example: ({ disabled, value, placeholder, description, label, error }) =>
    html`<sds-input-field
      label=${label}
      error=${error}
      description=${description}
      disabled=${disabled}
      defaultValue=${value}
      placeholder=${placeholder}
    ></sds-input-field>`,
});
