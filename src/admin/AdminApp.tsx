import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { defaultContent } from '../cms/defaultContent';
import { useContentState } from '../cms/ContentContext';
import { getToken, login, saveContent, setToken } from '../cms/client';
import type { Person, SiteContent } from '../cms/types';
import { Area, CardFrame, CheckInput, ImageInput, NumberInput, StringList, TextInput, moveItem, newId } from './ui';

const NAV = [
  ['Home', ['home', 'navigation', 'footer']],
  ['About', ['mission', 'story', 'team', 'board']],
  ['Programs', ['ourWork', 'canship', 'katha']],
  ['Impact', ['impactPage']],
  ['Chapters', ['france', 'usa']],
  ['Stories', ['blogs', 'featuredPage', 'publications', 'policies']],
  ['Support', ['getInvolved', 'donate', 'faq']],
] as const;

const LABELS: Record<string, string> = {
  home: 'Homepage',
  navigation: 'Menu',
  footer: 'Footer',
  mission: 'Mission & values',
  story: 'Our story',
  team: 'Team',
  board: 'Board',
  ourWork: 'Our work',
  canship: 'CANSHIP',
  katha: 'Katha Bunaun',
  impactPage: 'Our impact',
  france: 'Canopy France',
  usa: 'Canopy USA',
  blogs: 'Blogs',
  featuredPage: 'Featured',
  publications: 'Publications',
  policies: 'Policies',
  getInvolved: 'Get involved',
  donate: 'Donate',
  faq: 'FAQ',
};

function blankPerson(category: string): Person {
  return { id: newId(), name: '', title: '', category, image: '', description: '', linkedin: '' };
}

function PeopleEditor({
  people,
  categories,
  onChange,
  showTitle = true,
}: {
  people: Person[];
  categories: string[];
  onChange: (people: Person[]) => void;
  showTitle?: boolean;
}) {
  return (
    <div>
      <button
        type="button"
        className="mb-4 rounded-lg bg-primary-orange px-3 py-2 text-sm font-semibold text-white"
        onClick={() => onChange([blankPerson(categories[0] || ''), ...people])}
      >
        Add person
      </button>
      {people.map((person, index) => (
        <CardFrame
          key={person.id}
          title={person.name || 'New person'}
          onRemove={() => onChange(people.filter((item) => item.id !== person.id))}
          onUp={() => onChange(moveItem(people, index, -1))}
          onDown={() => onChange(moveItem(people, index, 1))}
        >
          <TextInput label="Name" value={person.name} onChange={(name) => onChange(people.map((item) => item.id === person.id ? { ...item, name } : item))} />
          {showTitle ? <TextInput label="Role" value={person.title} onChange={(title) => onChange(people.map((item) => item.id === person.id ? { ...item, title } : item))} /> : null}
          <label className="mb-4 block text-sm font-semibold text-neutral-700">
            Group
            <select
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm"
              value={person.category}
              onChange={(event) => onChange(people.map((item) => item.id === person.id ? { ...item, category: event.target.value } : item))}
            >
              {categories.map((category) => <option key={category}>{category}</option>)}
            </select>
          </label>
          <ImageInput label="Photo" value={person.image} onChange={(image) => onChange(people.map((item) => item.id === person.id ? { ...item, image } : item))} />
          <Area label="Bio" value={person.description} onChange={(description) => onChange(people.map((item) => item.id === person.id ? { ...item, description } : item))} />
          <TextInput label="LinkedIn URL" value={person.linkedin} onChange={(linkedin) => onChange(people.map((item) => item.id === person.id ? { ...item, linkedin } : item))} />
        </CardFrame>
      ))}
    </div>
  );
}

function Editor({ section, draft, setDraft }: { section: string; draft: SiteContent; setDraft: (next: SiteContent) => void }) {
  if (section === 'home') {
    const home = draft.home;
    const set = (next: SiteContent['home']) => setDraft({ ...draft, home: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Homepage</h2>
        <ImageInput label="Logo" value={draft.site.logo} onChange={(logo) => setDraft({ ...draft, site: { ...draft.site, logo } })} />
        <TextInput label="Donate button" value={draft.site.donateLabel} onChange={(donateLabel) => setDraft({ ...draft, site: { ...draft.site, donateLabel } })} />
        <ImageInput label="Hero image (desktop)" value={home.hero.desktopImage} onChange={(desktopImage) => set({ ...home, hero: { ...home.hero, desktopImage } })} />
        <ImageInput label="Hero image (phone)" value={home.hero.mobileImage} onChange={(mobileImage) => set({ ...home, hero: { ...home.hero, mobileImage } })} />
        <TextInput label="Hero highlight" value={home.hero.highlight} onChange={(highlight) => set({ ...home, hero: { ...home.hero, highlight } })} />
        <TextInput label="Hero rest of title" value={home.hero.rest} onChange={(rest) => set({ ...home, hero: { ...home.hero, rest } })} />
        <TextInput label="Intro before percent" value={home.intro.beforePercent} onChange={(beforePercent) => set({ ...home, intro: { ...home.intro, beforePercent } })} />
        <TextInput label="Intro percent" value={home.intro.percent} onChange={(percent) => set({ ...home, intro: { ...home.intro, percent } })} />
        <TextInput label="Dropout phrase" value={home.intro.dropoutPhrase} onChange={(dropoutPhrase) => set({ ...home, intro: { ...home.intro, dropoutPhrase } })} />
        <Area label="After dropout" value={home.intro.afterDropout} onChange={(afterDropout) => set({ ...home, intro: { ...home.intro, afterDropout } })} />
        <TextInput label="Changing line" value={home.intro.changing} onChange={(changing) => set({ ...home, intro: { ...home.intro, changing } })} />
        <Area label="Middle paragraph" value={home.intro.middle} onChange={(middle) => set({ ...home, intro: { ...home.intro, middle } })} />
        <TextInput label="Before 100%" value={home.intro.beforeHundred} onChange={(beforeHundred) => set({ ...home, intro: { ...home.intro, beforeHundred } })} />
        <TextInput label="100% figure" value={home.intro.hundred} onChange={(hundred) => set({ ...home, intro: { ...home.intro, hundred } })} />
        <TextInput label="After 100%" value={home.intro.afterHundred} onChange={(afterHundred) => set({ ...home, intro: { ...home.intro, afterHundred } })} />
        <Area label="Intro ending" value={home.intro.ending} onChange={(ending) => set({ ...home, intro: { ...home.intro, ending } })} />
        <ImageInput label="What we do image" value={home.about.image} onChange={(image) => set({ ...home, about: { ...home.about, image } })} />
        <TextInput label="What we do title" value={home.about.title} onChange={(title) => set({ ...home, about: { ...home.about, title } })} />
        <StringList label="What we do paragraphs" values={home.about.paragraphs} multiline onChange={(paragraphs) => set({ ...home, about: { ...home.about, paragraphs } })} />
        <TextInput label="What we do button" value={home.about.button} onChange={(button) => set({ ...home, about: { ...home.about, button } })} />
        <TextInput label="What we do link" value={home.about.href} onChange={(href) => set({ ...home, about: { ...home.about, href } })} />
        <TextInput label="Numbers title" value={home.impact.title} onChange={(title) => set({ ...home, impact: { ...home.impact, title } })} />
        <Area label="Numbers intro" value={home.impact.intro} onChange={(intro) => set({ ...home, impact: { ...home.impact, intro } })} />
        {home.impact.stats.map((stat, index) => (
          <div key={stat.id} className="mb-4 grid grid-cols-2 gap-3 rounded-xl border p-3">
            <TextInput label="Stat label" value={stat.title} onChange={(title) => {
              const stats = home.impact.stats.map((item, i) => i === index ? { ...item, title } : item);
              set({ ...home, impact: { ...home.impact, stats } });
            }} />
            <NumberInput label="Number" value={stat.value} onChange={(value) => {
              const stats = home.impact.stats.map((item, i) => i === index ? { ...item, value } : item);
              set({ ...home, impact: { ...home.impact, stats } });
            }} />
            <TextInput label="Suffix" value={stat.suffix} onChange={(suffix) => {
              const stats = home.impact.stats.map((item, i) => i === index ? { ...item, suffix } : item);
              set({ ...home, impact: { ...home.impact, stats } });
            }} />
          </div>
        ))}
        <h3 className="mb-2 text-lg font-bold">Testimonials</h3>
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...home, testimonials: [{ id: newId(), text: '', name: '', position: '', image: '' }, ...home.testimonials] })}>Add testimonial</button>
        {home.testimonials.map((item, index) => (
          <CardFrame key={item.id} title={item.name} onRemove={() => set({ ...home, testimonials: home.testimonials.filter((t) => t.id !== item.id) })} onUp={() => set({ ...home, testimonials: moveItem(home.testimonials, index, -1) })} onDown={() => set({ ...home, testimonials: moveItem(home.testimonials, index, 1) })}>
            <TextInput label="Name" value={item.name} onChange={(name) => set({ ...home, testimonials: home.testimonials.map((t) => t.id === item.id ? { ...t, name } : t) })} />
            <TextInput label="Role" value={item.position} onChange={(position) => set({ ...home, testimonials: home.testimonials.map((t) => t.id === item.id ? { ...t, position } : t) })} />
            <Area label="Quote" value={item.text} onChange={(text) => set({ ...home, testimonials: home.testimonials.map((t) => t.id === item.id ? { ...t, text } : t) })} />
            <ImageInput label="Photo" value={item.image} onChange={(image) => set({ ...home, testimonials: home.testimonials.map((t) => t.id === item.id ? { ...t, image } : t) })} />
          </CardFrame>
        ))}
        <TextInput label="Support statistic" value={home.support.stat} onChange={(stat) => set({ ...home, support: { ...home.support, stat } })} />
        <Area label="Support line" value={home.support.beforeHighlight} onChange={(beforeHighlight) => set({ ...home, support: { ...home.support, beforeHighlight } })} />
        <TextInput label="Support highlight" value={home.support.highlight} onChange={(highlight) => set({ ...home, support: { ...home.support, highlight } })} />
        <Area label="Support body" value={home.support.body} onChange={(body) => set({ ...home, support: { ...home.support, body } })} />
        <TextInput label="Support button" value={home.support.button} onChange={(button) => set({ ...home, support: { ...home.support, button } })} />
        <TextInput label="Partners title" value={home.partners.title} onChange={(title) => set({ ...home, partners: { ...home.partners, title } })} />
        <ImageInput label="Partners image" value={home.partners.image} onChange={(image) => set({ ...home, partners: { ...home.partners, image } })} />
        <TextInput label="Featured title" value={home.featured.title} onChange={(title) => set({ ...home, featured: { ...home.featured, title } })} />
        <TextInput label="Featured button" value={home.featured.button} onChange={(button) => set({ ...home, featured: { ...home.featured, button } })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...home, featured: { ...home.featured, logos: [...home.featured.logos, { id: newId(), image: '', alt: '' }] } })}>Add logo</button>
        {home.featured.logos.map((logo) => (
          <div key={logo.id} className="mb-3 rounded-xl border p-3">
            <ImageInput label={logo.alt || 'Logo'} value={logo.image} onChange={(image) => set({ ...home, featured: { ...home.featured, logos: home.featured.logos.map((item) => item.id === logo.id ? { ...item, image } : item) } })} />
            <TextInput label="Alt text" value={logo.alt} onChange={(alt) => set({ ...home, featured: { ...home.featured, logos: home.featured.logos.map((item) => item.id === logo.id ? { ...item, alt } : item) } })} />
            <button type="button" className="text-sm text-primary-red" onClick={() => set({ ...home, featured: { ...home.featured, logos: home.featured.logos.filter((item) => item.id !== logo.id) } })}>Remove logo</button>
          </div>
        ))}
        <TextInput label="Newsletter title" value={home.newsletter.title} onChange={(title) => set({ ...home, newsletter: { ...home.newsletter, title } })} />
        <Area label="Newsletter text" value={home.newsletter.description} onChange={(description) => set({ ...home, newsletter: { ...home.newsletter, description } })} />
        <TextInput label="Privacy line" value={home.newsletter.privacy} onChange={(privacy) => set({ ...home, newsletter: { ...home.newsletter, privacy } })} />
        <TextInput label="Subscribe button" value={home.newsletter.button} onChange={(button) => set({ ...home, newsletter: { ...home.newsletter, button } })} />
      </div>
    );
  }

  if (section === 'navigation') {
    const items = draft.navigation.items;
    const setItems = (next: SiteContent['navigation']['items']) => setDraft({ ...draft, navigation: { items: next } });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Menu</h2>
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => setItems([...items, { id: newId(), name: 'New item', href: '/', isRoute: true, submenu: [] }])}>Add menu item</button>
        {items.map((item, index) => (
          <CardFrame key={item.id} title={item.name} onRemove={() => setItems(items.filter((entry) => entry.id !== item.id))} onUp={() => setItems(moveItem(items, index, -1))} onDown={() => setItems(moveItem(items, index, 1))}>
            <TextInput label="Label" value={item.name} onChange={(name) => setItems(items.map((entry) => entry.id === item.id ? { ...entry, name } : entry))} />
            <TextInput label="Link" value={item.href} onChange={(href) => setItems(items.map((entry) => entry.id === item.id ? { ...entry, href } : entry))} />
            <CheckInput label="Goes to a page" value={item.isRoute} onChange={(isRoute) => setItems(items.map((entry) => entry.id === item.id ? { ...entry, isRoute } : entry))} />
            <button type="button" className="mb-2 text-sm font-semibold text-primary-orange" onClick={() => setItems(items.map((entry) => entry.id === item.id ? { ...entry, submenu: [...entry.submenu, { id: newId(), name: 'New link', href: '/', isRoute: true }] } : entry))}>Add dropdown link</button>
            {item.submenu.map((sub) => (
              <div key={sub.id} className="mb-3 rounded-lg bg-neutral-50 p-3">
                <TextInput label="Dropdown label" value={sub.name} onChange={(name) => setItems(items.map((entry) => entry.id === item.id ? { ...entry, submenu: entry.submenu.map((link) => link.id === sub.id ? { ...link, name } : link) } : entry))} />
                <TextInput label="Dropdown link" value={sub.href} onChange={(href) => setItems(items.map((entry) => entry.id === item.id ? { ...entry, submenu: entry.submenu.map((link) => link.id === sub.id ? { ...link, href } : link) } : entry))} />
                <button type="button" className="text-sm text-primary-red" onClick={() => setItems(items.map((entry) => entry.id === item.id ? { ...entry, submenu: entry.submenu.filter((link) => link.id !== sub.id) } : entry))}>Remove link</button>
              </div>
            ))}
          </CardFrame>
        ))}
      </div>
    );
  }

  if (section === 'footer') {
    const footer = draft.footer;
    const set = (next: SiteContent['footer']) => setDraft({ ...draft, footer: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Footer</h2>
        <Area label="Mission" value={footer.mission} onChange={(mission) => set({ ...footer, mission })} />
        <TextInput label="Copyright" value={draft.site.copyright} onChange={(copyright) => setDraft({ ...draft, site: { ...draft.site, copyright } })} />
        <StringList label="Office address lines" values={footer.officeLines} onChange={(officeLines) => set({ ...footer, officeLines })} />
        <TextInput label="Map link" value={footer.mapUrl} onChange={(mapUrl) => set({ ...footer, mapUrl })} />
        <TextInput label="Phone" value={footer.phone} onChange={(phone) => set({ ...footer, phone })} />
        <TextInput label="Email" value={footer.email} onChange={(email) => set({ ...footer, email })} />
        <TextInput label="Instagram" value={footer.instagram} onChange={(instagram) => set({ ...footer, instagram })} />
        <TextInput label="Facebook" value={footer.facebook} onChange={(facebook) => set({ ...footer, facebook })} />
        <TextInput label="LinkedIn" value={footer.linkedin} onChange={(linkedin) => set({ ...footer, linkedin })} />
        <TextInput label="YouTube" value={footer.youtube} onChange={(youtube) => set({ ...footer, youtube })} />
        <h3 className="mb-2 font-bold">Take action links</h3>
        {footer.takeAction.map((link) => (
          <div key={link.id} className="mb-2 grid grid-cols-2 gap-2">
            <TextInput label="Label" value={link.label} onChange={(label) => set({ ...footer, takeAction: footer.takeAction.map((item) => item.id === link.id ? { ...item, label } : item) })} />
            <TextInput label="Link" value={link.href} onChange={(href) => set({ ...footer, takeAction: footer.takeAction.map((item) => item.id === link.id ? { ...item, href } : item) })} />
          </div>
        ))}
        <h3 className="mb-2 font-bold">Resource links</h3>
        {footer.resources.map((link) => (
          <div key={link.id} className="mb-2 grid grid-cols-2 gap-2">
            <TextInput label="Label" value={link.label} onChange={(label) => set({ ...footer, resources: footer.resources.map((item) => item.id === link.id ? { ...item, label } : item) })} />
            <TextInput label="Link" value={link.href} onChange={(href) => set({ ...footer, resources: footer.resources.map((item) => item.id === link.id ? { ...item, href } : item) })} />
          </div>
        ))}
      </div>
    );
  }

  if (section === 'mission') {
    const mission = draft.mission;
    const set = (next: SiteContent['mission']) => setDraft({ ...draft, mission: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Mission & values</h2>
        <ImageInput label="Why education image" value={mission.whyImage} onChange={(whyImage) => set({ ...mission, whyImage })} />
        <TextInput label="Why education title" value={mission.whyTitle} onChange={(whyTitle) => set({ ...mission, whyTitle })} />
        <Area label="Why education" value={mission.whyBody} onChange={(whyBody) => set({ ...mission, whyBody })} />
        <TextInput label="Mission title" value={mission.missionTitle} onChange={(missionTitle) => set({ ...mission, missionTitle })} />
        <Area label="Mission" value={mission.missionBody} onChange={(missionBody) => set({ ...mission, missionBody })} />
        <TextInput label="Vision title" value={mission.visionTitle} onChange={(visionTitle) => set({ ...mission, visionTitle })} />
        <Area label="Vision" value={mission.visionBody} onChange={(visionBody) => set({ ...mission, visionBody })} />
        <TextInput label="Theory of change title" value={mission.theoryTitle} onChange={(theoryTitle) => set({ ...mission, theoryTitle })} />
        <ImageInput label="Theory of change diagram" value={mission.theoryImage} onChange={(theoryImage) => set({ ...mission, theoryImage })} />
        <StringList label="Phone diagram slides" values={mission.theorySlides} onChange={(theorySlides) => set({ ...mission, theorySlides })} />
        <TextInput label="Values title" value={mission.valuesTitle} onChange={(valuesTitle) => set({ ...mission, valuesTitle })} />
        {mission.values.map((value) => (
          <div key={value.id} className="mb-3 rounded-xl border p-3">
            <TextInput label="Value" value={value.label} onChange={(label) => set({ ...mission, values: mission.values.map((item) => item.id === value.id ? { ...item, label } : item) })} />
            <Area label="Description" value={value.description} onChange={(description) => set({ ...mission, values: mission.values.map((item) => item.id === value.id ? { ...item, description } : item) })} />
            <ImageInput label="Icon" value={value.icon} onChange={(icon) => set({ ...mission, values: mission.values.map((item) => item.id === value.id ? { ...item, icon } : item) })} />
          </div>
        ))}
        <ImageInput label="Closing image" value={mission.closingImage} onChange={(closingImage) => set({ ...mission, closingImage })} />
        <Area label="Closing text" value={mission.closingText} onChange={(closingText) => set({ ...mission, closingText })} />
      </div>
    );
  }

  if (section === 'story') {
    const story = draft.story;
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Our story</h2>
        <ImageInput label="Top image" value={story.topImage} onChange={(topImage) => setDraft({ ...draft, story: { ...story, topImage } })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => setDraft({ ...draft, story: { ...story, paragraphs: [...story.paragraphs, { id: newId(), text: '', style: 'body' }] } })}>Add paragraph</button>
        {story.paragraphs.map((paragraph, index) => (
          <CardFrame key={paragraph.id} title={`Paragraph ${index + 1}`} onRemove={() => setDraft({ ...draft, story: { ...story, paragraphs: story.paragraphs.filter((item) => item.id !== paragraph.id) } })}>
            <Area label="Text" value={paragraph.text} onChange={(text) => setDraft({ ...draft, story: { ...story, paragraphs: story.paragraphs.map((item) => item.id === paragraph.id ? { ...item, text } : item) } })} />
          </CardFrame>
        ))}
        <ImageInput label="Bottom image" value={story.bottomImage} onChange={(bottomImage) => setDraft({ ...draft, story: { ...story, bottomImage } })} />
      </div>
    );
  }

  if (section === 'team') {
    const team = draft.team;
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Team</h2>
        <TextInput label="Page title" value={team.title} onChange={(title) => setDraft({ ...draft, team: { ...team, title } })} />
        <StringList label="Filters" values={team.filters} onChange={(filters) => setDraft({ ...draft, team: { ...team, filters } })} />
        <Area label="Facilitator note" value={team.facilitatorNote} onChange={(facilitatorNote) => setDraft({ ...draft, team: { ...team, facilitatorNote } })} />
        <Area label="Volunteer note" value={team.volunteerNote} onChange={(volunteerNote) => setDraft({ ...draft, team: { ...team, volunteerNote } })} />
        <PeopleEditor people={team.members} categories={team.filters} onChange={(members) => setDraft({ ...draft, team: { ...team, members } })} />
      </div>
    );
  }

  if (section === 'board') {
    const board = draft.board;
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Board</h2>
        <TextInput label="Page title" value={board.title} onChange={(title) => setDraft({ ...draft, board: { ...board, title } })} />
        <StringList label="Filters" values={board.filters} onChange={(filters) => setDraft({ ...draft, board: { ...board, filters } })} />
        <PeopleEditor people={board.members} categories={board.filters} onChange={(members) => setDraft({ ...draft, board: { ...board, members } })} />
      </div>
    );
  }

  if (section === 'ourWork') {
    const page = draft.ourWork;
    const set = (next: SiteContent['ourWork']) => setDraft({ ...draft, ourWork: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Our work</h2>
        <ImageInput label="Hero" value={page.heroImage} onChange={(heroImage) => set({ ...page, heroImage })} />
        <Area label="Intro before highlights" value={page.introBefore} onChange={(introBefore) => set({ ...page, introBefore })} />
        <TextInput label="Cost highlight" value={page.cost} onChange={(cost) => set({ ...page, cost })} />
        <TextInput label="Quality highlight" value={page.quality} onChange={(quality) => set({ ...page, quality })} />
        <Area label="Middle" value={page.middle} onChange={(middle) => set({ ...page, middle })} />
        <TextInput label="Emphasis" value={page.emphasis} onChange={(emphasis) => set({ ...page, emphasis })} />
        <Area label="Closing" value={page.after} onChange={(after) => set({ ...page, after })} />
        <ImageInput label="Ecosystem image" value={page.ecosystemImage} onChange={(ecosystemImage) => set({ ...page, ecosystemImage })} />
        <TextInput label="Programs title" value={page.programsTitle} onChange={(programsTitle) => set({ ...page, programsTitle })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, programs: [...page.programs, { id: newId(), name: 'New program', image: '', route: '/' }] })}>Add program</button>
        {page.programs.map((program) => (
          <div key={program.id} className="mb-3 rounded-xl border p-3">
            <TextInput label="Name" value={program.name} onChange={(name) => set({ ...page, programs: page.programs.map((item) => item.id === program.id ? { ...item, name } : item) })} />
            <TextInput label="Page link" value={program.route} onChange={(route) => set({ ...page, programs: page.programs.map((item) => item.id === program.id ? { ...item, route } : item) })} />
            <ImageInput label="Image" value={program.image} onChange={(image) => set({ ...page, programs: page.programs.map((item) => item.id === program.id ? { ...item, image } : item) })} />
            <button type="button" className="text-sm text-primary-red" onClick={() => set({ ...page, programs: page.programs.filter((item) => item.id !== program.id) })}>Remove</button>
          </div>
        ))}
      </div>
    );
  }

  if (section === 'canship' || section === 'katha') {
    const page = draft[section];
    const set = (next: typeof page) => setDraft({ ...draft, [section]: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">{LABELS[section]}</h2>
        <ImageInput label="Hero" value={page.heroImage} onChange={(heroImage) => set({ ...page, heroImage })} />
        <TextInput label="Title" value={page.title} onChange={(title) => set({ ...page, title })} />
        <StringList label="Paragraphs" values={page.paragraphs} multiline onChange={(paragraphs) => set({ ...page, paragraphs })} />
        <TextInput label="Lifecycle title" value={page.lifecycleTitle} onChange={(lifecycleTitle) => set({ ...page, lifecycleTitle })} />
        <ImageInput label="Lifecycle image" value={page.lifecycleImage} onChange={(lifecycleImage) => set({ ...page, lifecycleImage })} />
        <TextInput label="Impact title" value={page.impactTitle} onChange={(impactTitle) => set({ ...page, impactTitle })} />
        <ImageInput label="Impact image" value={page.impactImage} onChange={(impactImage) => set({ ...page, impactImage })} />
        {page.points.map((point) => (
          <div key={point.id} className="mb-3 rounded-xl border p-3">
            <TextInput label="Point title" value={point.label} onChange={(label) => set({ ...page, points: page.points.map((item) => item.id === point.id ? { ...item, label } : item) })} />
            <Area label="Point text" value={point.text} onChange={(text) => set({ ...page, points: page.points.map((item) => item.id === point.id ? { ...item, text } : item) })} />
          </div>
        ))}
        {page.stats.map((stat) => (
          <div key={stat.id} className="mb-3 grid grid-cols-2 gap-2">
            <TextInput label="Emphasis" value={stat.emphasis} onChange={(emphasis) => set({ ...page, stats: page.stats.map((item) => item.id === stat.id ? { ...item, emphasis } : item) })} />
            <TextInput label="Rest" value={stat.text} onChange={(text) => set({ ...page, stats: page.stats.map((item) => item.id === stat.id ? { ...item, text } : item) })} />
          </div>
        ))}
        {'bottomImage' in page ? <ImageInput label="Bottom image" value={page.bottomImage} onChange={(bottomImage) => set({ ...page, bottomImage })} /> : null}
        {'slides' in page ? <StringList label="Phone slides" values={page.slides} onChange={(slides) => set({ ...page, slides })} /> : null}
      </div>
    );
  }

  if (section === 'impactPage') {
    const page = draft.impactPage;
    const set = (next: SiteContent['impactPage']) => setDraft({ ...draft, impactPage: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Our impact</h2>
        <ImageInput label="Hero" value={page.heroImage} onChange={(heroImage) => set({ ...page, heroImage })} />
        <TextInput label="Title" value={page.title} onChange={(title) => set({ ...page, title })} />
        <Area label="Intro" value={page.intro} onChange={(intro) => set({ ...page, intro })} />
        <h3 className="mb-2 font-bold">Charts</h3>
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, charts: [...page.charts, { id: newId(), title: 'New metric', preValue: 1, postValue: 2, growth: '10%' }] })}>Add chart</button>
        {page.charts.map((chart) => (
          <div key={chart.id} className="mb-3 grid grid-cols-2 gap-2 rounded-xl border p-3">
            <TextInput label="Title" value={chart.title} onChange={(title) => set({ ...page, charts: page.charts.map((item) => item.id === chart.id ? { ...item, title } : item) })} />
            <TextInput label="Growth" value={chart.growth} onChange={(growth) => set({ ...page, charts: page.charts.map((item) => item.id === chart.id ? { ...item, growth } : item) })} />
            <NumberInput label="Before" value={chart.preValue} onChange={(preValue) => set({ ...page, charts: page.charts.map((item) => item.id === chart.id ? { ...item, preValue } : item) })} />
            <NumberInput label="After" value={chart.postValue} onChange={(postValue) => set({ ...page, charts: page.charts.map((item) => item.id === chart.id ? { ...item, postValue } : item) })} />
            <button type="button" className="text-sm text-primary-red" onClick={() => set({ ...page, charts: page.charts.filter((item) => item.id !== chart.id) })}>Remove</button>
          </div>
        ))}
        <Area label="Footnote" value={page.footnote} onChange={(footnote) => set({ ...page, footnote })} />
        <Area label="Method note" value={page.methodNote} onChange={(methodNote) => set({ ...page, methodNote })} />
        {page.headlines.map((item) => (
          <div key={item.id} className="mb-3 rounded-xl border p-3">
            <TextInput label="Headline" value={item.headline} onChange={(headline) => set({ ...page, headlines: page.headlines.map((stat) => stat.id === item.id ? { ...stat, headline } : stat) })} />
            <Area label="Subtext" value={item.subtext} onChange={(subtext) => set({ ...page, headlines: page.headlines.map((stat) => stat.id === item.id ? { ...stat, subtext } : stat) })} />
          </div>
        ))}
        <TextInput label="Student stories title" value={page.studentsTitle} onChange={(studentsTitle) => set({ ...page, studentsTitle })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, students: [{ id: newId(), name: '', image: '', shortBio: '', fullStory: '' }, ...page.students] })}>Add student story</button>
        {page.students.map((student) => (
          <CardFrame key={student.id} title={student.name || 'New student'} onRemove={() => set({ ...page, students: page.students.filter((item) => item.id !== student.id) })}>
            <TextInput label="Name" value={student.name} onChange={(name) => set({ ...page, students: page.students.map((item) => item.id === student.id ? { ...item, name } : item) })} />
            <ImageInput label="Photo" value={student.image} onChange={(image) => set({ ...page, students: page.students.map((item) => item.id === student.id ? { ...item, image } : item) })} />
            <Area label="Short bio" value={student.shortBio} onChange={(shortBio) => set({ ...page, students: page.students.map((item) => item.id === student.id ? { ...item, shortBio } : item) })} />
            <Area label="Full story" rows={8} value={student.fullStory} onChange={(fullStory) => set({ ...page, students: page.students.map((item) => item.id === student.id ? { ...item, fullStory } : item) })} />
          </CardFrame>
        ))}
        <TextInput label="Map title" value={page.mapTitle} onChange={(mapTitle) => set({ ...page, mapTitle })} />
        <Area label="Map intro" value={page.mapIntro} onChange={(mapIntro) => set({ ...page, mapIntro })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, districts: [...page.districts, { id: newId(), name: '', schools: 0, students: '0', mapIndex: null }] })}>Add district</button>
        {page.districts.map((district) => (
          <div key={district.id} className="mb-3 grid grid-cols-2 gap-2 rounded-xl border p-3">
            <TextInput label="District" value={district.name} onChange={(name) => set({ ...page, districts: page.districts.map((item) => item.id === district.id ? { ...item, name } : item) })} />
            <NumberInput label="Schools" value={district.schools} onChange={(schools) => set({ ...page, districts: page.districts.map((item) => item.id === district.id ? { ...item, schools } : item) })} />
            <TextInput label="Students" value={district.students} onChange={(students) => set({ ...page, districts: page.districts.map((item) => item.id === district.id ? { ...item, students } : item) })} />
            <NumberInput label="Map index (blank = hidden)" value={district.mapIndex ?? 0} onChange={(mapIndex) => set({ ...page, districts: page.districts.map((item) => item.id === district.id ? { ...item, mapIndex: mapIndex || null } : item) })} />
            <button type="button" className="text-sm text-primary-red" onClick={() => set({ ...page, districts: page.districts.filter((item) => item.id !== district.id) })}>Remove</button>
          </div>
        ))}
        <TextInput label="Ecosystem title" value={page.ecosystemTitle} onChange={(ecosystemTitle) => set({ ...page, ecosystemTitle })} />
        <ImageInput label="Ecosystem image" value={page.ecosystemImage} onChange={(ecosystemImage) => set({ ...page, ecosystemImage })} />
        <TextInput label="SDG title" value={page.sdgTitle} onChange={(sdgTitle) => set({ ...page, sdgTitle })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, sdgs: [...page.sdgs, { id: newId(), image: '', alt: '' }] })}>Add SDG image</button>
        {page.sdgs.map((sdg) => (
          <div key={sdg.id} className="mb-3">
            <ImageInput label={sdg.alt || 'SDG'} value={sdg.image} onChange={(image) => set({ ...page, sdgs: page.sdgs.map((item) => item.id === sdg.id ? { ...item, image } : item) })} />
            <button type="button" className="text-sm text-primary-red" onClick={() => set({ ...page, sdgs: page.sdgs.filter((item) => item.id !== sdg.id) })}>Remove</button>
          </div>
        ))}
      </div>
    );
  }

  if (section === 'france' || section === 'usa') {
    const page = draft[section];
    const set = (next: typeof page) => setDraft({ ...draft, [section]: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">{LABELS[section]}</h2>
        <TextInput label="Title" value={page.title} onChange={(title) => set({ ...page, title })} />
        <ImageInput label="Hero" value={page.heroImage} onChange={(heroImage) => set({ ...page, heroImage })} />
        <Area label="Intro" value={page.intro} onChange={(intro) => set({ ...page, intro })} />
        <TextInput label="What we do title" value={page.whatWeDoTitle} onChange={(whatWeDoTitle) => set({ ...page, whatWeDoTitle })} />
        <ImageInput label="What we do image" value={page.whatWeDoImage} onChange={(whatWeDoImage) => set({ ...page, whatWeDoImage })} />
        <StringList label="What we do points" values={page.whatWeDoPoints} multiline onChange={(whatWeDoPoints) => set({ ...page, whatWeDoPoints })} />
        <Area label="Legal note" value={page.extraNote} onChange={(extraNote) => set({ ...page, extraNote })} />
        <TextInput label="Get involved intro" value={page.involvedIntro} onChange={(involvedIntro) => set({ ...page, involvedIntro })} />
        <ImageInput label="Get involved image" value={page.involvedImage} onChange={(involvedImage) => set({ ...page, involvedImage })} />
        <StringList label="Get involved points" values={page.involvedPoints} onChange={(involvedPoints) => set({ ...page, involvedPoints })} />
        <TextInput label="Email" value={page.email} onChange={(email) => set({ ...page, email })} />
        <Area label="Closing" value={page.closing} onChange={(closing) => set({ ...page, closing })} />
        <TextInput label="Newsletter label" value={page.newsletterLabel} onChange={(newsletterLabel) => set({ ...page, newsletterLabel })} />
        <TextInput label="Newsletter link" value={page.newsletterHref} onChange={(newsletterHref) => set({ ...page, newsletterHref })} />
        <Area label="Team intro" value={page.teamIntro} onChange={(teamIntro) => set({ ...page, teamIntro })} />
        <TextInput label="Team title" value={page.teamTitle} onChange={(teamTitle) => set({ ...page, teamTitle })} />
        <TextInput label="Bank title" value={page.bankTitle} onChange={(bankTitle) => set({ ...page, bankTitle })} />
        <TextInput label="Bank note" value={page.bankNote} onChange={(bankNote) => set({ ...page, bankNote })} />
        {page.bank.map((row) => (
          <div key={row.id} className="mb-2 grid grid-cols-2 gap-2">
            <TextInput label="Label" value={row.label} onChange={(label) => set({ ...page, bank: page.bank.map((item) => item.id === row.id ? { ...item, label } : item) })} />
            <TextInput label="Value" value={row.value} onChange={(value) => set({ ...page, bank: page.bank.map((item) => item.id === row.id ? { ...item, value } : item) })} />
          </div>
        ))}
        <button type="button" className="mb-4 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, bank: [...page.bank, { id: newId(), label: '', value: '' }] })}>Add bank row</button>
        <PeopleEditor people={page.members} categories={['CORE TEAM']} showTitle={false} onChange={(members) => set({ ...page, members })} />
      </div>
    );
  }

  if (section === 'blogs') {
    const blogs = draft.blogs;
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Blogs</h2>
        <TextInput label="Page title" value={blogs.title} onChange={(title) => setDraft({ ...draft, blogs: { ...blogs, title } })} />
        <button type="button" className="mb-3 rounded-lg bg-primary-orange px-3 py-2 text-sm font-semibold text-white" onClick={() => setDraft({ ...draft, blogs: { ...blogs, posts: [{ id: newId(), title: 'New blog', excerpt: '', image: '', content: '' }, ...blogs.posts] } })}>Add blog</button>
        {blogs.posts.map((post, index) => (
          <CardFrame key={post.id} title={post.title} onRemove={() => setDraft({ ...draft, blogs: { ...blogs, posts: blogs.posts.filter((item) => item.id !== post.id) } })} onUp={() => setDraft({ ...draft, blogs: { ...blogs, posts: moveItem(blogs.posts, index, -1) } })} onDown={() => setDraft({ ...draft, blogs: { ...blogs, posts: moveItem(blogs.posts, index, 1) } })}>
            <TextInput label="Title" value={post.title} onChange={(title) => setDraft({ ...draft, blogs: { ...blogs, posts: blogs.posts.map((item) => item.id === post.id ? { ...item, title } : item) } })} />
            <TextInput label="Year or excerpt" value={post.excerpt} onChange={(excerpt) => setDraft({ ...draft, blogs: { ...blogs, posts: blogs.posts.map((item) => item.id === post.id ? { ...item, excerpt } : item) } })} />
            <ImageInput label="Cover" value={post.image} onChange={(image) => setDraft({ ...draft, blogs: { ...blogs, posts: blogs.posts.map((item) => item.id === post.id ? { ...item, image } : item) } })} />
            <Area label="Article" rows={12} value={post.content} onChange={(content) => setDraft({ ...draft, blogs: { ...blogs, posts: blogs.posts.map((item) => item.id === post.id ? { ...item, content } : item) } })} />
          </CardFrame>
        ))}
      </div>
    );
  }

  if (section === 'featuredPage') {
    const page = draft.featuredPage;
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Featured</h2>
        <TextInput label="Title" value={page.title} onChange={(title) => setDraft({ ...draft, featuredPage: { ...page, title } })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => setDraft({ ...draft, featuredPage: { ...page, items: [{ id: newId(), title: '', url: '', image: '' }, ...page.items] } })}>Add feature</button>
        {page.items.map((item, index) => (
          <CardFrame key={item.id} title={item.title || 'Feature'} onRemove={() => setDraft({ ...draft, featuredPage: { ...page, items: page.items.filter((entry) => entry.id !== item.id) } })} onUp={() => setDraft({ ...draft, featuredPage: { ...page, items: moveItem(page.items, index, -1) } })} onDown={() => setDraft({ ...draft, featuredPage: { ...page, items: moveItem(page.items, index, 1) } })}>
            <TextInput label="Title" value={item.title} onChange={(title) => setDraft({ ...draft, featuredPage: { ...page, items: page.items.map((entry) => entry.id === item.id ? { ...entry, title } : entry) } })} />
            <TextInput label="Link" value={item.url} onChange={(url) => setDraft({ ...draft, featuredPage: { ...page, items: page.items.map((entry) => entry.id === item.id ? { ...entry, url } : entry) } })} />
            <ImageInput label="Image" value={item.image} onChange={(image) => setDraft({ ...draft, featuredPage: { ...page, items: page.items.map((entry) => entry.id === item.id ? { ...entry, image } : entry) } })} />
          </CardFrame>
        ))}
      </div>
    );
  }

  if (section === 'publications' || section === 'policies') {
    const isPolicies = section === 'policies';
    const groups = isPolicies
      ? [{ id: 'policies', label: draft.policies.title, visible: true, intro: draft.policies.intro, items: draft.policies.items }]
      : draft.publications.sections;
    const write = (next: typeof groups) => {
      if (isPolicies) {
        setDraft({ ...draft, policies: { ...draft.policies, title: next[0].label, intro: next[0].intro, items: next[0].items } });
      } else {
        setDraft({ ...draft, publications: { sections: next } });
      }
    };
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">{isPolicies ? 'Policies' : 'Publications'}</h2>
        {groups.map((group, groupIndex) => (
          <div key={group.id} className="mb-8">
            <TextInput label="Section title" value={group.label} onChange={(label) => write(groups.map((item, i) => i === groupIndex ? { ...item, label } : item))} />
            <Area label="Intro" value={group.intro} onChange={(intro) => write(groups.map((item, i) => i === groupIndex ? { ...item, intro } : item))} />
            {!isPolicies ? <CheckInput label="Show this section" value={group.visible} onChange={(visible) => write(groups.map((item, i) => i === groupIndex ? { ...item, visible } : item))} /> : null}
            <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => write(groups.map((item, i) => i === groupIndex ? { ...item, items: [{ id: newId(), title: 'New document', cover: '', file: '', label: '' }, ...item.items] } : item))}>Add document</button>
            {group.items.map((item) => (
              <CardFrame key={item.id} title={item.title} onRemove={() => write(groups.map((entry, i) => i === groupIndex ? { ...entry, items: entry.items.filter((doc) => doc.id !== item.id) } : entry))}>
                <TextInput label="Title" value={item.title} onChange={(title) => write(groups.map((entry, i) => i === groupIndex ? { ...entry, items: entry.items.map((doc) => doc.id === item.id ? { ...doc, title } : doc) } : entry))} />
                <TextInput label="Caption" value={item.label} onChange={(label) => write(groups.map((entry, i) => i === groupIndex ? { ...entry, items: entry.items.map((doc) => doc.id === item.id ? { ...doc, label } : doc) } : entry))} />
                <ImageInput label="Cover" value={item.cover} onChange={(cover) => write(groups.map((entry, i) => i === groupIndex ? { ...entry, items: entry.items.map((doc) => doc.id === item.id ? { ...doc, cover } : doc) } : entry))} />
                <ImageInput label="PDF" accept="application/pdf" value={item.file} onChange={(file) => write(groups.map((entry, i) => i === groupIndex ? { ...entry, items: entry.items.map((doc) => doc.id === item.id ? { ...doc, file } : doc) } : entry))} />
              </CardFrame>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (section === 'getInvolved') {
    const page = draft.getInvolved;
    const set = (next: SiteContent['getInvolved']) => setDraft({ ...draft, getInvolved: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Get involved</h2>
        <ImageInput label="Hero" value={page.heroImage} onChange={(heroImage) => set({ ...page, heroImage })} />
        <TextInput label="Title" value={page.title} onChange={(title) => set({ ...page, title })} />
        <Area label="Intro" value={page.intro} onChange={(intro) => set({ ...page, intro })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, ways: [...page.ways, { id: newId(), title: 'New way', body: '', image: '', imageSide: 'left', flipImage: false, buttons: [] }] })}>Add section</button>
        {page.ways.map((way) => (
          <CardFrame key={way.id} title={way.title} onRemove={() => set({ ...page, ways: page.ways.filter((item) => item.id !== way.id) })}>
            <TextInput label="Title" value={way.title} onChange={(title) => set({ ...page, ways: page.ways.map((item) => item.id === way.id ? { ...item, title } : item) })} />
            <Area label="Text" value={way.body} onChange={(body) => set({ ...page, ways: page.ways.map((item) => item.id === way.id ? { ...item, body } : item) })} />
            <ImageInput label="Image" value={way.image} onChange={(image) => set({ ...page, ways: page.ways.map((item) => item.id === way.id ? { ...item, image } : item) })} />
            {way.buttons.map((button) => (
              <div key={button.id} className="mb-2 grid grid-cols-2 gap-2">
                <TextInput label="Button" value={button.label} onChange={(label) => set({ ...page, ways: page.ways.map((item) => item.id === way.id ? { ...item, buttons: item.buttons.map((entry) => entry.id === button.id ? { ...entry, label } : entry) } : item) })} />
                <TextInput label="Link" value={button.href} onChange={(href) => set({ ...page, ways: page.ways.map((item) => item.id === way.id ? { ...item, buttons: item.buttons.map((entry) => entry.id === button.id ? { ...entry, href } : entry) } : item) })} />
              </div>
            ))}
            <button type="button" className="text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, ways: page.ways.map((item) => item.id === way.id ? { ...item, buttons: [...item.buttons, { id: newId(), label: 'Button', href: '/', newTab: false, popup: false }] } : item) })}>Add button</button>
          </CardFrame>
        ))}
        <TextInput label="Help title" value={page.helpTitle} onChange={(helpTitle) => set({ ...page, helpTitle })} />
        <Area label="Help text" value={page.helpBody} onChange={(helpBody) => set({ ...page, helpBody })} />
        <TextInput label="Help email" value={page.helpEmail} onChange={(helpEmail) => set({ ...page, helpEmail })} />
        <Area label="Help closing" value={page.helpClosing} onChange={(helpClosing) => set({ ...page, helpClosing })} />
        <ImageInput label="Help image" value={page.helpImage} onChange={(helpImage) => set({ ...page, helpImage })} />
      </div>
    );
  }

  if (section === 'donate') {
    const page = draft.donate;
    const set = (next: SiteContent['donate']) => setDraft({ ...draft, donate: next });
    return (
      <div>
        <h2 className="mb-4 text-2xl font-bold">Donate</h2>
        <ImageInput label="Hero" value={page.heroImage} onChange={(heroImage) => set({ ...page, heroImage })} />
        <Area label="Headline" value={page.headline} onChange={(headline) => set({ ...page, headline })} />
        <Area label="Intro" value={page.intro} onChange={(intro) => set({ ...page, intro })} />
        <TextInput label="Supports title" value={page.supportsTitle} onChange={(supportsTitle) => set({ ...page, supportsTitle })} />
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, tiers: [...page.tiers, { id: newId(), amount: '$0', description: '', icon: '' }] })}>Add tier</button>
        {page.tiers.map((tier) => (
          <div key={tier.id} className="mb-3 rounded-xl border p-3">
            <TextInput label="Amount" value={tier.amount} onChange={(amount) => set({ ...page, tiers: page.tiers.map((item) => item.id === tier.id ? { ...item, amount } : item) })} />
            <Area label="Description" value={tier.description} onChange={(description) => set({ ...page, tiers: page.tiers.map((item) => item.id === tier.id ? { ...item, description } : item) })} />
            <ImageInput label="Icon" value={tier.icon} onChange={(icon) => set({ ...page, tiers: page.tiers.map((item) => item.id === tier.id ? { ...item, icon } : item) })} />
            <button type="button" className="text-sm text-primary-red" onClick={() => set({ ...page, tiers: page.tiers.filter((item) => item.id !== tier.id) })}>Remove</button>
          </div>
        ))}
        <TextInput label="Button" value={page.button} onChange={(button) => set({ ...page, button })} />
        <Area label="Tax note" value={page.taxNote} onChange={(taxNote) => set({ ...page, taxNote })} />
        <TextInput label="Why title" value={page.whyTitle} onChange={(whyTitle) => set({ ...page, whyTitle })} />
        <ImageInput label="Why image" value={page.whyImage} onChange={(whyImage) => set({ ...page, whyImage })} />
        <StringList label="Why points" values={page.whyPoints} multiline onChange={(whyPoints) => set({ ...page, whyPoints })} />
        <TextInput label="Bank title" value={page.bankTitle} onChange={(bankTitle) => set({ ...page, bankTitle })} />
        {page.bank.map((row) => (
          <div key={row.id} className="mb-2 grid grid-cols-2 gap-2">
            <TextInput label="Label" value={row.label} onChange={(label) => set({ ...page, bank: page.bank.map((item) => item.id === row.id ? { ...item, label } : item) })} />
            <TextInput label="Value" value={row.value} onChange={(value) => set({ ...page, bank: page.bank.map((item) => item.id === row.id ? { ...item, value } : item) })} />
          </div>
        ))}
        <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => set({ ...page, bank: [...page.bank, { id: newId(), label: '', value: '' }] })}>Add bank row</button>
        <Area label="Thank you" value={page.thanks} onChange={(thanks) => set({ ...page, thanks })} />
        <Area label="Thank you emphasis" value={page.thanksEmphasis} onChange={(thanksEmphasis) => set({ ...page, thanksEmphasis })} />
        <StringList label="Suggested amounts" values={page.presetAmounts.map(String)} onChange={(values) => set({ ...page, presetAmounts: values.map((value) => Number(value) || 0) })} />
      </div>
    );
  }

  const faq = draft.faq;
  const setFaq = (next: SiteContent['faq']) => setDraft({ ...draft, faq: next });
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
      <TextInput label="Title" value={faq.title} onChange={(title) => setFaq({ ...faq, title })} />
      <Area label="Intro" value={faq.intro} onChange={(intro) => setFaq({ ...faq, intro })} />
      <StringList label="Categories (id is the first existing category name used by questions)" values={faq.categories.filter((item) => item.id !== 'all').map((item) => item.name)} onChange={(names) => {
        const rest = names.map((name, index) => {
          const existing = faq.categories.filter((item) => item.id !== 'all')[index];
          return { id: existing?.id || name.toLowerCase().replace(/\s+/g, '-'), name, icon: existing?.icon || 'book' };
        });
        setFaq({ ...faq, categories: [{ id: 'all', name: 'All Questions', icon: 'help' }, ...rest] });
      }} />
      <button type="button" className="mb-3 text-sm font-semibold text-primary-orange" onClick={() => setFaq({ ...faq, items: [{ id: newId(), question: '', answer: '', category: 'general', icon: 'book' }, ...faq.items] })}>Add question</button>
      {faq.items.map((item) => (
        <CardFrame key={item.id} title={item.question || 'New question'} onRemove={() => setFaq({ ...faq, items: faq.items.filter((entry) => entry.id !== item.id) })}>
          <TextInput label="Question" value={item.question} onChange={(question) => setFaq({ ...faq, items: faq.items.map((entry) => entry.id === item.id ? { ...entry, question } : entry) })} />
          <Area label="Answer" value={item.answer} onChange={(answer) => setFaq({ ...faq, items: faq.items.map((entry) => entry.id === item.id ? { ...entry, answer } : entry) })} />
          <label className="mb-4 block text-sm font-semibold">
            Category
            <select className="mt-1 w-full rounded-lg border px-3 py-2" value={item.category} onChange={(event) => setFaq({ ...faq, items: faq.items.map((entry) => entry.id === item.id ? { ...entry, category: event.target.value } : entry) })}>
              {faq.categories.filter((category) => category.id !== 'all').map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
          </label>
        </CardFrame>
      ))}
      <TextInput label="Still have questions title" value={faq.stillTitle} onChange={(stillTitle) => setFaq({ ...faq, stillTitle })} />
      <Area label="Still have questions text" value={faq.stillBody} onChange={(stillBody) => setFaq({ ...faq, stillBody })} />
      <TextInput label="Contact button" value={faq.contactLabel} onChange={(contactLabel) => setFaq({ ...faq, contactLabel })} />
      <TextInput label="Contact link" value={faq.contactHref} onChange={(contactHref) => setFaq({ ...faq, contactHref })} />
      <TextInput label="Email button" value={faq.emailLabel} onChange={(emailLabel) => setFaq({ ...faq, emailLabel })} />
      <TextInput label="Email link" value={faq.emailHref} onChange={(emailHref) => setFaq({ ...faq, emailHref })} />
    </div>
  );
}

export default function AdminApp() {
  const { content, setContent } = useContentState();
  const [authed, setAuthed] = useState(() => Boolean(getToken()));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [section, setSection] = useState('home');
  const [draft, setDraft] = useState<SiteContent>(content);
  const seenContent = useRef(content);
  useEffect(() => {
    setDraft((current) => (JSON.stringify(current) === JSON.stringify(seenContent.current) ? content : current));
    seenContent.current = content;
  }, [content]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const dirty = useMemo(() => JSON.stringify(draft) !== JSON.stringify(content), [draft, content]);

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFFBF2] px-4">
        <form
          className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
          onSubmit={async (event) => {
            event.preventDefault();
            setError('');
            try {
              const result = await login(username, password);
              setToken(result.token);
              setAuthed(true);
            } catch (err) {
              setError(err instanceof Error ? err.message : 'Could not sign in');
            }
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-orange">Canopy Nepal</p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-900">Website admin</h1>
          <p className="mt-2 text-sm text-neutral-600">Sign in to edit pages, photos, blogs, team, and publications.</p>
          <label className="mt-6 block text-sm font-semibold text-neutral-700">
            Username
            <input
              type="text"
              autoComplete="username"
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-3 font-normal"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-neutral-700">
            Password
            <input
              type="password"
              autoComplete="current-password"
              className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-3 font-normal"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {error ? <p className="mt-3 text-sm text-primary-red">{error}</p> : null}
          <button className="mt-4 w-full rounded-lg bg-primary-orange py-3 font-semibold text-white" type="submit">Sign in</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF6E6] text-neutral-900">
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-orange-100 bg-white px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-orange">Canopy CMS</p>
          <p className="text-sm text-neutral-500">{dirty ? 'Unsaved changes' : 'All changes saved'}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="rounded-lg px-3 py-2 text-sm font-semibold">View site</Link>
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm"
            onClick={() => {
              setDraft(defaultContent);
              setMessage('Loaded the original site content into the editor. Publish to restore it.');
            }}
          >
            Reset draft
          </button>
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm"
            onClick={() => {
              setToken('');
              setAuthed(false);
            }}
          >
            Log out
          </button>
          <button
            type="button"
            disabled={saving}
            className="rounded-lg bg-primary-cyan px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            onClick={async () => {
              setSaving(true);
              setError('');
              setMessage('');
              try {
                const result = await saveContent(draft);
                setContent(draft);
                setMessage(result.mode === 'github'
                  ? 'Published. Text is live on refresh. New images finish appearing after the site redeploys.'
                  : 'Published. Refresh the site to see it.');
              } catch (err) {
                setError(err instanceof Error ? err.message : 'Save failed');
              } finally {
                setSaving(false);
              }
            }}
          >
            {saving ? 'Publishing…' : 'Publish'}
          </button>
        </div>
      </header>
      {message ? <p className="bg-green-50 px-4 py-2 text-sm text-green-800">{message}</p> : null}
      {error ? <p className="bg-red-50 px-4 py-2 text-sm text-red-700">{error}</p> : null}
      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 md:grid-cols-[240px_1fr]">
        <aside className="border-r border-orange-100 bg-white p-4">
          {NAV.map(([group, ids]) => (
            <div key={group} className="mb-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-neutral-400">{group}</p>
              {ids.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSection(id)}
                  className={`mb-1 block w-full rounded-lg px-3 py-2 text-left text-sm ${section === id ? 'bg-primary-orange text-white' : 'hover:bg-orange-50'}`}
                >
                  {LABELS[id]}
                </button>
              ))}
            </div>
          ))}
        </aside>
        <main className="px-4 py-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            <Editor section={section} draft={draft} setDraft={setDraft} />
          </div>
        </main>
      </div>
    </div>
  );
}
