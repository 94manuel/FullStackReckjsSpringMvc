import { useRive } from 'rive-react';

function Example() {
  const params = {
    src: 'new_file.riv',
    useDevicePixelRatio:true,
    autoplay: false,
  };
  const { RiveComponent, rive } = useRive(params);

  return (
    <RiveComponent
    style={{height:"900px",width:"900px"}}
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}

export default Example;