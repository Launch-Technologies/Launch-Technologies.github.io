import { CrudApi } from './crud-api';

class CourseService extends CrudApi {
  async getCourse(params) {
    let result = await this.get(`courses`, params);
    return result.data;
  }
  async getPrograms(params) {
    let result = await this.get(`programs`, params);
    return result.data;
  }

  async getModules(params) {
    let result = await this.get(`modules`, params);
    return result.data;
  }

  async getLessons(params) {
    let result = await this.get(`lessons`, params);
    return result.data;
  }

  async getLessonEvents(params) {
    let result = await this.get(`lesson-events`, params);
    return result.data;
  }

  async getProgress(student_id, course_id) {
    let result = await this.get(`s/course-progress/${course_id}/${student_id}`);
    return result;
  }

  async updateCohortLive(course_id, is_live) {
    let result = await this.post(`/s/syllabus/live`, {
      course_id: course_id,
      is_live: is_live,
    });
    return result;
  }

  async getCourseNotification(params) {
    let result = await this.get(`course-notifications`, params);
    return result.data;
  }

  async createCourse(params) {
    let result = await this.post(`courses`, params);
    return result;
  }

  async createPrograms(params) {
    let result = await this.post(`programs`, params);
    return result;
  }

  async createModules(params) {
    let result = await this.post(`modules`, params);
    return result;
  }

  async createLessons(params) {
    let result = await this.post(`lessons`, params);
    return result;
  }

  async createLessonEvent(params) {
    let result = await this.post(`lesson-events`, params);
    return result;
  }

  async createCourseNotification(params) {
    let result = await this.post(`course-notifications`, params);
    return result;
  }

  async editCourse(id, params) {
    let result = await this.patch(`course/${id}`, params);
    return result;
  }

  async editProgram(id, params) {
    let result = await this.patch(`program/${id}`, params);
    return result;
  }

  async editModule(id, params) {
    let result = await this.patch(`module/${id}`, params);
    return result;
  }

  async editLesson(id, params) {
    let result = await this.patch(`lesson/${id}`, params);
    return result;
  }

  async editLessonEvent(id, params) {
    let result = await this.patch(`lesson-event/${id}`, params);
    return result;
  }

  async editCourseNotification(id, params) {
    let result = await this.patch(`course-notification/${id}`, params);
    return result;
  }

  async deleteCourse(id, params) {
    let result = await this.delete(`course/${id}`, params);
    return result;
  }

  async deleteProgram(id, params) {
    let result = await this.delete(`program/${id}`, params);
    return result;
  }

  async deleteModule(id, params) {
    let result = await this.delete(`module/${id}`, params);
    return result;
  }

  async deleteLesson(id, params) {
    let result = await this.delete(`lesson/${id}`, params);
    return result;
  }

  async deleteLessonEvent(id, params) {
    let result = await this.delete(`lesson-event/${id}`, params);
    return result;
  }

  async deleteCourseNotification(id, params) {
    let result = await this.delete(`course-notification/${id}`, params);
    return result;
  }

  findLastLesson(progress = []) {
    let isFound = false;
    let currentLesson = {};
    let totalLesson = 0;
    let totalFinished = 0;
    for (let pr of progress) {
      totalLesson += pr.lesson?.length;
      if (!pr.is_completed && pr.lesson && pr.lesson.length) {
        /**
         * default to last lesson, in case every lesson in a module is finished
         * yet no next module not learned yet
         */
        for (let ls of pr.lesson) {
          if (ls?.monitoring?.completed === 'True') {
            totalFinished++;
            // currentLesson = ls
          } else if (
            !isFound &&
            (!ls?.monitoring || ls?.monitoring?.completed !== 'True')
          ) {
            currentLesson = ls;
            isFound = true;
            // break;
          }
          // break
        }
      } else {
        totalFinished += pr.lesson?.length || 0;
      }
    }
    return [currentLesson, totalLesson, totalFinished];
  }
}

export default CourseService;
