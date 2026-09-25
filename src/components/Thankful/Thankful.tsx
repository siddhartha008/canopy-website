import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const ThankfulPartnersSection = () => {
  const partners = useSite().home.partners;
  return (
    <section className="bg-secondary-gray py-8">
      {/* Header - Keep centered with max width */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl text-primary-red font-bold">
            {partners.title}
          </h2>
        </div>
      </div>
      
      <div className="w-full overflow-hidden px-16 -mb-8">
        <img 
          src={mediaUrl(partners.image)} 
          alt="Canopy Nepal Partners - including Nepal Government, Harvard Kennedy School, hundredED, NCEP, Alaya, International Literacy Learning, Friends of Nepal Adelaide, Milken Penn GSE, International Literacy Association, US Embassy Youth Council, UN Women Asia Pacific, Global Citizen, World Literacy Foundation, Little Big Fund, and YO"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ThankfulPartnersSection;
