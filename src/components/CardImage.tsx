import vector1 from '../assets/vector1.png';

type CardImageProps = {
  inProgressCount: number;
  resolvedCount: number;
};

function CardImage({ inProgressCount, resolvedCount }: CardImageProps) {
  return (
    <div className='card card-side bg-white flex justify-center gap-6 py-10'>
      <figure className='bg-blue-600'>
        <img src={vector1} alt='Vector1' />
        <h2 className='card-title text-violet-50 flex flex-col items-center justify-center'>
          In-Progress
          <span className='text-4xl'>{inProgressCount}</span>
        </h2>
        <img src={vector1} alt='Vector1' />
      </figure>

      <figure className='bg-green-600'>
        <img src={vector1} alt='Vector1' />
        <h2 className='card-title text-violet-50 flex flex-col items-center justify-center'>
          Resolved
          <span className='text-4xl'>{resolvedCount}</span>
        </h2>
        <img src={vector1} alt='Vector1' />
      </figure>
    </div>
  );
}

export default CardImage;
