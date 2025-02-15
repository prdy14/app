import FileUploder from "src/app/components/FileUploder";

export default function Home() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <FileUploder assetType={"RGB_SPLITTING"} />
    </div>
  );
}
