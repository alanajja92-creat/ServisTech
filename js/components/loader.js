              <div class="h-5 bg-gray-700 rounded w-3/4"></div>
            </div>
            <div>
              <div class="h-3 bg-gray-700 rounded w-1/4 mb-2"></div>
              <div class="h-5 bg-gray-700 rounded w-2/3"></div>
            </div>
            <div class="pt-4 border-t border-gray-700">
               <div class="h-10 bg-gray-700 rounded w-full"></div>
            </div>
          </div>
        </div>
      `;
    }
    if (type === 'form') {
      return `
        <div class="bg-gray-800 border border-gray-700 rounded-xl p-5 animate-pulse space-y-5">
          <div>
            <div class="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
            <div class="h-12 bg-gray-700 rounded-lg w-full"></div>
          </div>
          <div>
            <div class="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
            <div class="h-24 bg-gray-700 rounded-lg w-full"></div>
          </div>
          <div>
            <div class="h-4 bg-gray-700 rounded w-1/4 mb-2"></div>
            <div class="h-12 bg-gray-700 rounded-lg w-full"></div>
          </div>
          <div class="pt-4">
             <div class="h-12 bg-gray-700 rounded-lg w-full"></div>
          </div>
        </div>
      `;
    }
    return '';
  }
};
