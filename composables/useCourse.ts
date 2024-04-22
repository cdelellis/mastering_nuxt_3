import courseData from './courseData';

type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: number;
  text: string;
  sourceUrl?: string;
};

type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
};

type Course = {
  chapters: Chapter[];
  title: string;
}

export const useCourse = () => {
  return {
    ...courseData,
    chapters: courseData.chapters.map((chapter) => {
      const lessons: Lesson[] = chapter.lessons.map(
        (lesson) => ({
          ... lesson,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
        })
      );
      return{
      ...chapter,
      lessons,
      };
    }),
  };
};
