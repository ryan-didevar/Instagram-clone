import Image from "next/image";

const MiniProfile = () => {
  return (
    <div className="flex items-center mt-14 ml-10">
      <Image
        src="https://media.licdn.com/dms/image/D4E35AQEP6ONKbJUGZw/profile-framedphoto-shrink_400_400/0/1681760309205?e=1703494800&v=beta&t=zl-Kt6BZZXI0e7PaE1avrm7d20jXVvArDxdyYwRlsx0"
        alt="user-image"
        width={64}
        height={64}
        className="rounded-full cursor-pointer border p-[2px]"
      />
      <div className="flex-1 pl-3">
        <h2 className="font-bold">Abbas Didevar</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
};

export default MiniProfile;
