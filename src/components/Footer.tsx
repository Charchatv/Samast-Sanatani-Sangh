import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-primary-container text-on-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-8 md:px-12">
        <div className="space-y-6">
          <div className="text-2xl font-headline tracking-tighter">
            Samast Sanatani Sangh
          </div>
          <p className="opacity-80 font-body text-sm leading-relaxed max-w-md lowercase">
            Preserving eternal wisdom. Uniting hearts across the globe in the light of Sanatan Dharma.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end justify-center">
          <Link 
            href="/download"
            className="bg-on-primary-container text-primary-container px-10 py-4 rounded-full text-sm font-label font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-black/20"
          >
            Download our app
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-on-primary-container/20 flex flex-col md:flex-row justify-between items-center px-8 md:px-12 gap-8">
        <div className="flex flex-col md:flex-row items-center gap-8 font-body text-[10px] uppercase tracking-[0.2em]">
          <p className="opacity-90">
            © {new Date().getFullYear()} Samast Sanatani Sangh.
          </p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy-policy" className="opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms-n-condition" className="opacity-90 hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          </div>
        </div>
        
        <div className="font-label text-[10px] tracking-widest uppercase opacity-90">
          Designed & Developed with ❤️ by <a href="https://www.sugamaya.in/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition-opacity">Sugamaya Governance</a>
        </div>
      </div>
    </footer>
  );
}
