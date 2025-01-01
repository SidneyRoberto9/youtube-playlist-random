import PlaylistInput from '@/components/playlist-input';

export default function Page() {
  return (
    <main className="sm:my-8 my-2 w-full overflow-hidden break-all">
      <div className="my-4 sm:text-lg text-base flex items-center justify-center">
        <p>Get Random Video From Any YouTube PlayList</p>
      </div>

      <PlaylistInput />
    </main>
  );
}
