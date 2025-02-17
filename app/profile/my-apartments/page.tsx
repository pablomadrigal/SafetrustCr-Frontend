'use client';
import Header from '@/layouts/Header';
import { IoHomeOutline } from 'react-icons/io5';
import ApartmentsComponent from '@/components/profile/pages/ApartmentsComponent';
import { useTranslation } from 'react-i18next';

const MyApartments: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <section className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full pt-16 px-6 sm:px-24 gap-4">
        <h1 className="text-[#000000] font-bold text-[28px] sm:text-[36px]">
          {t('myApartments.title')}
        </h1>
        <button className="bg-custom-orange w-full sm:w-[210px] font-bold text-[16px] text-white h-[36px] rounded-[4px] flex justify-center items-center gap-2">
          <IoHomeOutline className="w-[20px] h-[20px]" />
          {t('myApartments.newApartmentBtn')}
        </button>
      </section>

      <section className="px-4 sm:px-24 mt-6">
        <ApartmentsComponent />
      </section>
    </div>
  );
};

export default MyApartments;
