import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Unlimited File Converter
        </h1>
      </div>
      <Dropzone />
    </div>
  );
}
