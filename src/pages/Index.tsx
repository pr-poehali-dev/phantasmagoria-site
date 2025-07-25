import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [galleryView, setGalleryView] = useState<'grid' | 'single'>('grid');

  const magicalPlaces = [
    {
      id: 'castle',
      name: 'Звёздный замок',
      description: 'Величественный замок где живут добрые волшебники и звёздная пыль танцует в воздухе',
      image: '/img/4abdbf60-1023-410a-8283-87891804c849.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'library',
      name: 'Волшебная библиотека',
      description: 'Уютная библиотека с летающими книгами и свечами, которые никогда не гаснут',
      image: '/img/2a0bee08-f55e-4499-ab37-6d955da00a48.jpg',
      color: 'from-orange-400 to-yellow-500'
    },
    {
      id: 'forest',
      name: 'Заколдованный лес',
      description: 'Мистический лес со светящимися грибами и феями, порхающими среди деревьев',
      image: '/img/2a2dff60-bac9-4ed4-94ae-09774bbd6642.jpg',
      color: 'from-green-400 to-teal-500'
    }
  ];

  const sparkles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute animate-sparkle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${1.5 + Math.random()}s`
      }}
    >
      ✨
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-foreground overflow-x-hidden">
      {/* Floating sparkles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {sparkles}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Magical arch entrance */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-caveat font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent animate-glow mb-4">
              PHANTASMAGORIA
            </div>
            <div className="absolute -top-4 -left-4 text-4xl animate-float">🌟</div>
            <div className="absolute -top-2 -right-6 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
            <div className="absolute -bottom-2 left-1/4 text-2xl animate-float" style={{ animationDelay: '1s' }}>🌙</div>
          </div>
          
          <p className="text-xl md:text-2xl font-sans text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Добро пожаловать в волшебный городок, где живут добрые существа и сбываются самые невероятные мечты
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-caveat text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Images" className="mr-2" size={20} />
              Посетить галерею
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-caveat text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Map" className="mr-2" size={20} />
              Изучить карту
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-caveat font-bold text-accent mb-4">
              Галерея волшебных мест
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя удивительные локации нашего сказочного городка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {magicalPlaces.map((place) => (
              <Card 
                key={place.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-accent/50"
                onClick={() => setSelectedLocation(place.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${place.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-caveat font-bold text-accent mb-2">{place.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{place.description}</p>
                    <Button 
                      variant="ghost" 
                      className="mt-4 text-accent hover:text-accent-foreground hover:bg-accent/20 font-caveat text-lg"
                    >
                      Узнать больше
                      <Icon name="ChevronRight" className="ml-2" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 px-4 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-caveat font-bold text-accent mb-4">
              Карта Phantasmagoria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Исследуйте все уголки нашего волшебного городка
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Map */}
            <div className="relative">
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-8">
                <div className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-lg p-8 min-h-96">
                  {/* Map markers */}
                  <div 
                    className="absolute top-1/4 left-1/3 cursor-pointer transform hover:scale-125 transition-transform duration-200"
                    onClick={() => setSelectedLocation('castle')}
                  >
                    <div className="text-4xl animate-float">🏰</div>
                    <div className="text-xs text-center text-accent font-caveat font-bold mt-1">Замок</div>
                  </div>
                  
                  <div 
                    className="absolute top-2/3 right-1/4 cursor-pointer transform hover:scale-125 transition-transform duration-200"
                    onClick={() => setSelectedLocation('library')}
                  >
                    <div className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>📚</div>
                    <div className="text-xs text-center text-accent font-caveat font-bold mt-1">Библиотека</div>
                  </div>
                  
                  <div 
                    className="absolute bottom-1/4 left-1/4 cursor-pointer transform hover:scale-125 transition-transform duration-200"
                    onClick={() => setSelectedLocation('forest')}
                  >
                    <div className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🌲</div>
                    <div className="text-xs text-center text-accent font-caveat font-bold mt-1">Лес</div>
                  </div>

                  {/* Magical paths */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 33% 25% Q 50% 40% 75% 67%"
                      stroke="rgba(255, 215, 0, 0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    <path
                      d="M 33% 25% Q 20% 50% 25% 75%"
                      stroke="rgba(255, 215, 0, 0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </svg>
                </div>
              </Card>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              {selectedLocation ? (
                <Card className="bg-card/80 backdrop-blur-sm border-2 border-accent/50 p-6">
                  {(() => {
                    const place = magicalPlaces.find(p => p.id === selectedLocation);
                    return place ? (
                      <>
                        <h3 className="text-3xl font-caveat font-bold text-accent mb-4">{place.name}</h3>
                        <img 
                          src={place.image} 
                          alt={place.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <p className="text-muted-foreground leading-relaxed text-lg">{place.description}</p>
                        <div className="mt-6 flex gap-4">
                          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-caveat text-lg">
                            <Icon name="Eye" className="mr-2" size={16} />
                            Посетить
                          </Button>
                          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-caveat text-lg">
                            <Icon name="Heart" className="mr-2" size={16} />
                            В избранное
                          </Button>
                        </div>
                      </>
                    ) : null;
                  })()}
                </Card>
              ) : (
                <Card className="bg-card/80 backdrop-blur-sm border-2 border-border/50 p-6">
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-caveat font-bold text-accent mb-2">Выберите локацию</h3>
                    <p className="text-muted-foreground">Нажмите на любую точку на карте, чтобы узнать больше о волшебном месте</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl font-caveat font-bold text-accent mb-4">Phantasmagoria</div>
          <p className="text-muted-foreground mb-6">Волшебный городок, где сбываются мечты</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent/20">
              <Icon name="Star" className="mr-2" size={16} />
              Магия
            </Button>
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent/20">
              <Icon name="Heart" className="mr-2" size={16} />
              Дружба  
            </Button>
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent/20">
              <Icon name="Sparkles" className="mr-2" size={16} />
              Чудеса
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;