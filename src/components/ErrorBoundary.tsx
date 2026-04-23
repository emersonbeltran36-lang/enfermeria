// @ts-nocheck
import * as React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center bg-medical-card border border-medical-border rounded-2xl m-4">
          <div className="w-16 h-16 bg-medical-red/20 rounded-full flex items-center justify-center text-medical-red mb-6 border border-medical-red/30">
            <AlertCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Algo salió mal</h2>
          <p className="text-medical-gray max-w-md mb-8">
            Lo sentimos, ha ocurrido un error inesperado en la aplicación. Por favor, intenta recargar la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-xl font-bold hover:bg-medical-blue/80 transition-all shadow-lg shadow-medical-blue/20"
          >
            <RefreshCw size={18} />
            Recargar Aplicación
          </button>
          <div className="mt-8 p-4 bg-black/40 rounded-lg text-left w-full overflow-auto max-h-40">
            <p className="text-xs font-mono text-medical-red whitespace-pre-wrap">
              {this.state.error?.toString()}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
