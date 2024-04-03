import Image from 'next/image';

export function SimpleProfile() {
  return (
    <section className="">
      <div className="sm:text-3xl text-2xl sm:p-8 p-6">郭家銘</div>
      <div>
        <Image
          src={'/personal.jpg'}
          alt="avatar"
          width={520}
          height={250}
          objectFit="contain"
          className="rounded-r-3xl"
        />
      </div>
    </section>
  );
}
