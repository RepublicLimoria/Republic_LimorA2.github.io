import { useState } from 'react';
import { CIVIC_SERVICES } from '../data/civicData';
import { ServiceItem } from '../types';
import { ArrowRight, Clock, Building, DollarSign, CheckCircle2, Search } from 'lucide-react';

interface ServicesCatalogProps {
  onSelectAction: (actionKey: string, payload?: unknown) => void;
  externalSearchQuery?: string;
}

export function ServicesCatalog({ onSelectAction, externalSearchQuery = '' }: ServicesCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>(externalSearchQuery);

  const categories = [
    { id: 'all', label: 'All Public Services' },
    { id: 'permits', label: 'Permits & Licensing' },
    { id: 'taxes', label: 'Taxes & Finance' },
    { id: 'records', label: 'Vital Records & FOIA' },
    { id: 'transit', label: 'Transit & Parking' },
    { id: 'housing', label: 'Housing & Relief' },
    { id: 'elections', label: 'Elections & Voting' },
    { id: 'health', label: 'Public Health' },
  ];

  const filteredServices = CIVIC_SERVICES.filter((svc: ServiceItem) => {
    const matchesCategory = selectedCategory === 'all' || svc.category === selectedCategory;
    const query = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      svc.title.toLowerCase().includes(query) ||
      svc.description.toLowerCase().includes(query) ||
      svc.department.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="services-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block mb-1">
            Department Catalog
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Official Municipal & County Services
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Certified citizen self-service pathways provided by Fairview City agencies and county administrations.
          </p>
        </div>

        {/* Local Filter Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Filter services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Filter Segmented Buttons (Anti-Slop compliant functional buttons) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap cursor-pointer transition-colors ${
              selectedCategory === cat.id
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-lg p-10 text-center">
          <p className="text-slate-600 text-sm">No civic services match your search filter "{searchTerm}".</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="mt-3 text-xs font-semibold text-blue-700 underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-slate-400 hover:shadow-sm transition-all"
            >
              <div>
                {/* Meta details without pill badges (domain design constitution) */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <span className="font-medium text-slate-700 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate max-w-[210px]">{svc.department}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Online Filing</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {svc.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{svc.processingTime}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-700 font-medium">
                    <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate max-w-[150px]">{svc.fee}</span>
                  </span>
                </div>

                <button
                  onClick={() => onSelectAction(svc.linkAction, svc)}
                  className="w-full py-2 px-3 bg-slate-900 hover:bg-blue-700 text-white text-xs font-semibold rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>
                    {svc.linkAction === 'apply-permit'
                      ? 'Begin Application'
                      : svc.linkAction === 'pay-taxes'
                      ? 'Access Payment Portal'
                      : svc.linkAction === 'vital-records'
                      ? 'Request Certified Copies'
                      : 'Access Online Service'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
