const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div className='mb-12 text-center'>
      <h2 className='font-bold text-3xl text-zinc-800 md:text-4xl dark:text-zinc-200'>
        {title}
      </h2>
      {subTitle && (
        <p className='mt-2 text-gray-600 text-md md:text-lg dark:text-gray-400'>
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;
