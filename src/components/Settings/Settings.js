import React, {useState} from 'react';
import './Setting.css';
import Input from "../Input/Input";

const Settings = ({onSubmit}) => {
  const classRadiosAndSize = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
  };
  const [setting, setSetting] = useState({
    placeholder: 'Your name',
    label: 'Full name',
    description: '',
    error: '',
    variant: '',
    radius: 'xs',
    size: 'xs',
    disabled: false,
    asterisk: false,
  });


  const handleChange = (event) => {
    const classRadiosAndSizeReversed = ['xs', 'sm', 'md', 'lg', 'xl'];
    const check = event.target.name === 'disabled'
               || event.target.name === 'asterisk';
    const radio = event.target.name === 'radius'
               || event.target.name === 'size';

    if (radio) {
      setSetting({
        ...setting,
        [event.target.name]: classRadiosAndSizeReversed[event.target.value]
      });
    } else {
      setSetting({
        ...setting,
        [event.target.name]: check ? event.target.checked : event.target.value
      });
    }

    onSubmit(setting)
  }


  return (
    <div className="setting">
      <Input
        type="text"
        placeholder={setting.placeholder}
        label={setting.label}
        description={setting.description}
        error={setting.error}
        variant={setting.variant}
        radius={setting.radius}
        size={setting.size}
        disabled={setting.disabled}
        asterisk={setting.asterisk}
      />
      <form onChange={handleChange}>
        <div className="input-block">
          <div className="label">Placeholder</div>
          <input name="placeholder" className="input" type="text" placeholder="" value={setting.placeholder}/>
        </div>
        <div className="input-block">
          <div className="label">Label</div>
          <input name="label" className="input" type="text" placeholder="" value={setting.label}/>
        </div>
        <div className="input-block">
          <div className="label">Description</div>
          <input name="description" className="input" type="text" placeholder="Description" />
        </div>
        <div className="input-block">
          <div className="label">Error</div>
          <input name="error" className="input" type="text" placeholder="Error" />
        </div>
        <div className="input-block">
          <div className="label">Variant</div>
          <select name="variant">
            <option value="default">Default</option>
            <option value="filled">Filled</option>
            <option value="unstyled">unstyled</option>
          </select>
        </div>
        <div className="input-block">
          <div className="label">Radius</div>
          <input name="radius" type="range"  step="0" min="0" max="4" value={classRadiosAndSize[setting.radius]}/>
        </div>
        <div className="input-block">
          <div className="label">Size</div>
          <input name="size" type="range"  step="0" min="0" max="4" value={classRadiosAndSize[setting.size]}/>
        </div>
        <div className="input-block">
          <div className="label">Disabled</div>
          <input name="disabled" type="checkbox" checked={setting.disabled}/>
        </div>
        <div className="input-block">
          <div className="label">With asterisk</div>
          <input name="asterisk" type="checkbox" checked={setting.asterisk}/>
        </div>
      </form>
    </div>
  );
};

export default Settings;