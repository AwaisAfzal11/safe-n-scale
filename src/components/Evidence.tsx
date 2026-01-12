import { Download, AlertTriangle, Clock, User, FileText, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Evidence() {
  return (
    <section id="evidence" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">
            Evidence first
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Every alert comes with a complete evidence bundle, ready for audit or investigation.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Evidence card mock */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white">Void Abuse Detected</h3>
                  <p className="text-sm text-white/50">High-confidence incident</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-400/30 text-xs text-red-300">
                Critical
              </span>
            </div>
            
            {/* Evidence items */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-white/80">Timestamp</div>
                  <div className="text-sm text-white/50">Oct 15, 2025 • 14:32:18 EST</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <User className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-white/80">Staff / Shift</div>
                  <div className="text-sm text-white/50">Employee #4721 • Evening shift</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <FileText className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-white/80">Receipt OCR</div>
                  <div className="text-sm text-white/50">3 line items voided after payment</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-white/80">Reconciliation Notes</div>
                  <div className="text-sm text-white/50">Cash drawer over by $127.43 at EOD</div>
                </div>
              </div>
            </div>
            
            {/* Action button */}
            <div className="pt-4 border-t border-white/10">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl group">
                <Download className="w-4 h-4 mr-2" />
                Download Evidence Bundle
              </Button>
            </div>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/50">
              All evidence is timestamped, encrypted, and stored with chain-of-custody logging
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
