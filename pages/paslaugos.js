import Layout from '../components/Layout'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../styles/css/galerija.module.css'
import { getAuthorInfo, getAllProjects } from '../lib/api'
import { PROJECT_ID, PROJECT_DATASET } from '../lib/constants'

const Paslaugos = ({ author, projects }) => {

    const imgUrlBuilder = imageUrlBuilder({
        projectId: PROJECT_ID,
        dataset: PROJECT_DATASET
    })

    return (
        <Layout title="Paslaugos" author={author}>
            <div className={styles.projectsGrid}>
            {projects.map((project, i) => {
              return (
                <div className={styles.singleProject} key={i}>
                  <div className={styles.imageHover}>
                    <div className={styles.projectImg}>
                      <img src={imgUrlBuilder.image(project.mainImage).width(500).height(300)} alt="" />
                    </div>
                  </div>
                  <div className={styles.projectInfo}>
                    <h2>{project.title}</h2>
                    <h3>{project.subtitle}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const author = await getAuthorInfo()
    const projects = await getAllProjects()
    return {
      props: { author, projects },
      revalidate: 1
    }
}

export default Paslaugos